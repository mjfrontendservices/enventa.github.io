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

    // search bar

    $(".searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // our availab;e product

    var allProduct;
    $.getJSON("assets/json/items.json", (data) => {
        allProduct = data;
        allProductFunction()
    })

    function allProductFunction() {
        var items = $('.items');
        allProduct.forEach(product => {
            items.append(`
                <div class="item">
                    <div class="img">
                        <img src="${product.img}" alt="">
                    </div>
                    <div class="description">
                        <h4>${product.productName}</h4>
                        <p>
                            <span class="price highlight">${product.price}</span></br>
                            <span class="category"><i class="fa fa-search"></i> ${product.searches}</span>
                        </p>
                    </div>
                </div>
            `)
        })
    }

})