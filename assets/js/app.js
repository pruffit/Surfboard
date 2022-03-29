const burgerOpen = document.querySelector("#burgerToggle");
const burgerClose = document.querySelector("#burgerClose");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.body;
burgerOpen.addEventListener("click", (e) => {
    e.preventDefault();
    burgerMenu.style.display = "flex";
    body.classList.add("no-scroll");
});
burgerClose.addEventListener("click", (e) => {
    e.preventDefault();
    burgerMenu.style.display = "none";
    body.classList.remove("no-scroll");
});