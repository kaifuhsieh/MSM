$(function () {
    //map drag
    const position = { x: 0, y: 0 };

    interact('.mapContent').draggable({
        listeners: {
            start(event) {
                // console.log(event.type, event.target);
            },
            move(event) {
                position.x += event.dx;
                position.y += event.dy;
                event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
            },
        },
    });

    // this function is used later in the resizing and gesture demos
    // click document close Dropdown
    $('.check-allDay')
        .find('input[type="checkbox"]')
        .focus(function () {
            $(this).parents('.form').find('.datePeriod').toggleClass('readonly');
            $(this).blur();
        });
    // floor
    $('.btn-floor')
        .off()
        .click(function (e) {
            $(this).siblings('.dropdown-floor').stop().slideToggle('400', 'easeOutQuint');
            e.preventDefault();
        });
    var floorName;
    $('.dropdown-floor')
        .find('a')
        .each(function () {
            $(this)
                .off()
                .click(function (e) {
                    floorName = $(this).html();
                    $('.btn-floor').find('span').html(floorName);
                    console.log(floorName);

                    e.preventDefault();
                });
        });
    //startDate
    $('.startDate')
        .find('.btn-dropdown')
        .off()
        .click(function (e) {
            $(this).siblings('.dropdown-startDate').stop().slideToggle('400', 'easeOutQuint');
            $('.dropdown-endDate').stop().hide();
            e.preventDefault();
        });
    var startDateName;
    $('.dropdown-startDate')
        .find('a')
        .each(function () {
            $(this)
                .off()
                .click(function (e) {
                    startDateName = $(this).html();
                    $(this).parents('.startDate').find('.btn-dropdown').html(startDateName);
                    console.log(startDateName);

                    e.preventDefault();
                });
        });
    //endDate
    $('.endDate')
        .find('.btn-dropdown')
        .off()
        .click(function (e) {
            $(this).siblings('.dropdown-endDate').stop().slideToggle('400', 'easeOutQuint');
            $('.dropdown-startDate').stop().hide();
            e.preventDefault();
        });
    var endDateName;
    $('.dropdown-endDate')
        .find('a')
        .each(function () {
            $(this)
                .off()
                .click(function (e) {
                    endDateName = $(this).html();
                    $(this).parents('.endDate').find('.btn-dropdown').html(endDateName);
                    console.log(endDateName);

                    e.preventDefault();
                });
        });
    // date picker
    $('#preserverDate').flatpickr({
        defaultDate: 'today',
    });
    $('#bookingDate').flatpickr({
        defaultDate: 'today',
    });
    $('.btn-apply')
        .off()
        .click(function (e) {
            var floorText = $('.btn-floor').html();
            $('.nowFloor').find('span').html(floorName);
            e.preventDefault();
        });
    function closeDropdown() {
        $('.dropdown').stop(true, true).hide();
    }
    $(document.body).click(function (e) {
        closeDropdown();
    });
    $('.btn-dropdown').click(function (e) {
        e.stopPropagation();
    });

    // controlPanel
    $('.controlPanel')
        .find('.btn-plus')
        .off()
        .click(function (e) {
            $('.mapArea').find('.img-container').removeClass('small large').addClass('large');
            $(this).siblings('.resizeNum').html('120%');
        });
    $('.controlPanel')
        .find('.btn-minus')
        .off()
        .click(function (e) {
            $('.mapArea').find('.img-container').removeClass('small large').addClass('small');
            $(this).siblings('.resizeNum').html('90%');
        });
    $('.controlPanel')
        .find('.btn-cross')
        .off()
        .click(function (e) {
            $('.mapArea').find('.mapContent').removeAttr('style');
            $('.mapArea').find('.img-container').removeClass('large small');
            $(this).siblings('.resizeNum').html('100%');
        });
    //寫死的
    // available for booking
    $('#booking_503').mouseover(function () {
        $('.dotContent').find('#room_503').addClass('active');
    });
    $('#booking_503').mouseout(function () {
        $('.dotContent').find('#room_503').removeClass('active');
    });
    $('#booking_504').mouseover(function () {
        $('.dotContent').find('#room_504').addClass('active');
    });
    $('#booking_504').mouseout(function () {
        $('.dotContent').find('#room_504').removeClass('active');
    });
    $('#booking_505').mouseover(function () {
        $('.dotContent').find('#room_505').addClass('active');
    });
    $('#booking_505').mouseout(function () {
        $('.dotContent').find('#room_505').removeClass('active');
    });
    $('#booking_507').mouseover(function () {
        $('.dotContent').find('#room_507').addClass('active');
    });
    $('#booking_507').mouseout(function () {
        $('.dotContent').find('#room_507').removeClass('active');
    });
    $('#booking_509').mouseover(function () {
        $('.dotContent').find('#room_509').addClass('active');
    });
    $('#booking_509').mouseout(function () {
        $('.dotContent').find('#room_509').removeClass('active');
    });
    $('#booking_510').mouseover(function () {
        $('.dotContent').find('#room_510').addClass('active');
    });
    $('#booking_510').mouseout(function () {
        $('.dotContent').find('#room_510').removeClass('active');
    });
    $('#booking_511').mouseover(function () {
        $('.dotContent').find('#room_511').addClass('active');
    });
    $('#booking_511').mouseout(function () {
        $('.dotContent').find('#room_511').removeClass('active');
    });
    // pop booking
    $('.mapContent')
        .find('a.booking')
        .each(function () {
            $(this)
                .off()
                .click(function (e) {
                    $('.pop_booking').stop().addClass('show');
                    $('.roomSlider').refresh();
                });
        });
    $('.booking_info')
        .find('.btn-close')
        .off()
        .click(function (e) {
            $('.pop_booking').stop().removeClass('show');
        });
    $('.closeArea')
        .off()
        .click(function (e) {
            $('.pop_booking').stop().removeClass('show');
        });
    // slick

    // 請放置customize.js
    // 廣告輪播
    $('.roomSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
        ],
    });
    $(window).on('load resize scroll', function (e) {
        var window_H = $(window).innerHeight();
        var windowTop = $(window).scrollTop();
        $('.mapContent').each(function (index, el) {
            // 可以+130 讓圖進入多點再跑動畫
            var imgTop = Math.floor($(this).offset().top - windowTop + 130);
            //imgTop < window_H 是指進入到最底部
            //imgTop>0 是指還沒滾到最上方
            //同時條件成立 代表物件在看得到的地方才會trigger動畫
            if (imgTop < window_H && imgTop > 0) {
                $(this).addClass('effect');
            }
        });
    });
});
