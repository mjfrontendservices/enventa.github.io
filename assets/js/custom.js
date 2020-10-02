$(document).ready(function () {

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

    // hero img

    // var heroImg;
    // $.getJSON("assets/json/hero.json", (data) => {
    //     heroImg = data;
    //     getHeroImgData()
    // })

    // function getHeroImgData() {
    //     var imgSlide = $('.hero');
    //     heroImg.forEach(hero => {
    //         imgSlide.append(`
    //             <div class="imgSlide">
    //                 <img src="${hero.img}" alt="">
    //             </div>
    //         `)
    //     })

    //     $('.hero').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 3000,
    //     });
    // }

})