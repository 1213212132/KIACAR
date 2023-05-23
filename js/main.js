$(function () {
    $('.main_slide').slick({

        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,


    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');
    });



})

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    })


})