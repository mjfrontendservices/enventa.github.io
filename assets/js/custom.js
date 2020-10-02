$(document).ready(function () {

    // hero img

    var heroImg;
    $.getJSON("assets/json/hero.json", (data) => {
        heroImg = data;
        getHeroImgData()
    })

    function getHeroImgData() {
        var imgSlide = $('.hero');
        heroImg.forEach(hero => {
            imgSlide.append(`
                <div class="imgSlide">
                    <img src="${hero.img}" alt="">
                </div>
            `)
        })

        $('.hero').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }

})