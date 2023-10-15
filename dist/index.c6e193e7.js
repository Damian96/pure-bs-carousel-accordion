$(function() {
    const $cards = $(".carousel-item .card");
    $cards.each(function(index, element) {
        element.addEventListener("click", ()=>{
            $cards.removeClass("expand").removeClass("unset").addClass("small");
            element.classList.remove("small");
            $(element).addClass("expand active");
        });
    });
    const carousel = document.getElementById("pureBsAccordionCarousel");
    new bootstrap.Carousel(carousel);
    carousel.addEventListener("slide.bs.carousel", function(event) {
        $cards.removeClass("active");
        const $activeItem = $(event.relatedTarget);
        $activeItem.find(".card").first().removeClass("small").addClass("expand active");
    });
    carousel.addEventListener("slid.bs.carousel", function() {
        $cards.filter(".expand").not(".active").removeClass("expand").addClass("small");
    });
});

//# sourceMappingURL=index.c6e193e7.js.map
