$(document).ready(function() {
    const mesureWidth = item => {
        let reqItemWidth = 0;
        const screenWidth = $(window).width();
        const container = item.closest(".product-menu__inner");
        const titlesBlocks = container.find(".product-menu__item-title");
        const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
        const isDesktop = window.matchMedia("(min-width: 1100px)").matches;
        const isTablet = window.matchMedia("(min-width: 768px)").matches;
        const textContainer = item.find(".product-menu__container");
        const paddingLeft = parseInt(textContainer.css("padding-left"));
        const paddingRight = parseInt(textContainer.css("padding-right"));
        if(isDesktop){
            reqItemWidth = 500;
        }else if(isTablet){
            reqItemWidth = screenWidth - titlesWidth;
        }else{
            reqItemWidth = screenWidth - titlesWidth / titlesBlocks.length;
        }
        return {
            container: reqItemWidth,
            textContainer: reqItemWidth - paddingLeft - paddingRight
        }
    };
    const closeEveryItemInContainer = container => {
        const items = container.find(".product-menu__item");
        const content = container.find(".product-menu__content");
        items.removeClass("active").siblings().removeClass("static");
        content.width(0);
    };
    const openItem = item => {
        const hiddenContent = item.find(".product-menu__content");
        const reqWidth = mesureWidth(item);
        const textBlock = item.find(".product-menu__container");
        item.addClass("active").siblings().addClass("static");
        hiddenContent.width(reqWidth.container);
        textBlock.width(reqWidth.textContainer);
    };
    $(".product-menu__item-title").on("click", e => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const item = $this.closest(".product-menu__item");
        const itemOpened = item.hasClass("active");
        const container = $this.closest(".product-menu__inner");
        if(itemOpened){
            closeEveryItemInContainer(container);
        }else{
            closeEveryItemInContainer(container);
            openItem(item);
        }
    });
    $(".product-menu__close").on("click", e => {
        e.preventDefault();
        closeEveryItemInContainer($(".product-menu__inner"));
    });
});