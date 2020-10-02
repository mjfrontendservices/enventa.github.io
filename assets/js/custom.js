$(document).ready(function () {

    // herop img owl carousel

    $('.hero .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                items: 1,
                nav: false,
                loop: true
            },
            1000: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    })

})