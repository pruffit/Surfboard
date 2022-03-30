$(document).ready(function() {
    const openItem = item => {
        const container = item.closest(".team__item");
        const contentBlock = container.find(".team__content");
        const textBlock = contentBlock.find(".team__content-block");
        const reqHeight = textBlock.height();
        container.addClass("active");
        contentBlock.height(reqHeight);
    }
    const closeAll = container => {
        const items = container.find(".team__content");
        const itemContainer = container.find(".team__item");
        itemContainer.removeClass("active");
        items.height(0);
    }
    $(".team__title").on("click", (e) => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const container = $this.closest(".team");
        const elemContainer = $this.closest(".team__item");
        if(elemContainer.hasClass("active")){
            closeAll(container);
        }else{
            closeAll(container);
            openItem($this);
        }
    });
});