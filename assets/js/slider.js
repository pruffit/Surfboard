$(window).on("load resize",function(e){
    const slider = $(".product-slider__list").bxSlider({
        pager: false,
        controls: false
    });
    $(".product-slider__prev").on("click", (e) => {
        e.preventDefault();
        slider.goToPrevSlide();
    });
    $(".product-slider__next").on("click", (e) => {
        e.preventDefault();
        slider.goToNextSlide();
    });
});