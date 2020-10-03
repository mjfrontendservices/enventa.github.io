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

    // product modal

    var productModal;
    $.getJSON("assets/json/productModal.json", (data) => {
        productModal = data;
        productModalFunction()
    })

    function productModalFunction() {
        var modals = $('.productModals');
        productModal.forEach(productModal => {
            modals.append(`
            <div id="${productModal.productIdTarget}" class="modal fade" role="dialog">
                <div class="modal-dialog">
        
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="owl-carousel">
                                <img src="${productModal.img1}" alt="">
                                <img src="${productModal.img2}" alt="">
                                <img src="${productModal.img3}" alt="">
                                <img src="${productModal.img4}" alt="">
                                <img src="${productModal.img5}" alt="">
                            </div>
                            <h6>${productModal.productName}</h6>
                            <p class="price">${productModal.price}</p>
                            <p>
                                <span>
                                    ${productModal.description}
                                </span></br>
                                <a href="sms: 09978972884?body=Hi, I want to orer ${productModal.productName}">
                                    <button class="inquire">Order Now!</button>
                                </a>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Back</button>
                        </div>
                    </div>
        
                </div>
            </div>
            `)
            $('.modal-body .owl-carousel').owlCarousel({
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
    }

    // our available product

    var allProduct;
    $.getJSON("assets/json/items.json", (data) => {
        allProduct = data;
        allProductFunction()
    })

    function allProductFunction() {
        var items = $('.items');
        allProduct.forEach(product => {
            items.append(`
                <div class="item" data-toggle="modal" data-target="${product.productId}">
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
            $('.count').text(`${allProduct.length}`);
        })
    }


})