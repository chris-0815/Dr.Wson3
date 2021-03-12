$(document).ready(function() {

    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slick-prev slick-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow"></button>',
    });

    $('.books__carousel_box').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        prevArrow: '<button class="PrevArrow books__slick-arrow"></button>',
        nextArrow: '<button class="NextArrow books__slick-arrow"></button>',
        dots: true,
    });

})