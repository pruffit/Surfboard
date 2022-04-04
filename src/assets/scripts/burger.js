const burgerOpen = $("#burgerToggle");
const burgerClose = $("#burgerClose");
const burgerMenu = $(".burger-menu");
const body = $("body");
const openBurgerMenu = function () {
    burgerMenu.css({
        display: "flex" 
    });
    body.addClass("no-scroll");
}
const hideBurgerMenu = function () {
    burgerMenu.css({
        display: "none" 
    });
    body.removeClass("no-scroll");
}
burgerOpen.on("click", (e) => {
    e.preventDefault();
    openBurgerMenu();
});
burgerClose.on("click", (e) => {
    e.preventDefault();
    hideBurgerMenu();
});
burgerMenu.find('.menu__link').on("click", (e) => {
    e.preventDefault();
    hideBurgerMenu();
});