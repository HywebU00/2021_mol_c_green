// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // 
    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    // cp_photo
    $('.cp .Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.cp .Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.cp .Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });
    // mp_photo
    $('.mpSyncing_slider .Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.mpSyncing_slider .Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        fade: true,
        swipe: true,
        swipeToSlide: true,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true,
    });
    $('.mpSyncing_slider .Slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });
    // Search 無障礙
    if ($('.functionbtn_block .search .keywordHot').length == 0 && $('.functionbtn_block .search .important_link').length == 0) {
        $('.btn_grp input').focusout(function() {
            $('.functionbtn_block .search').hide();
        });
    } else {
        $('.functionbtn_block .search .important_link').find('div:last-of-type>a').focusout(function() {
            $('.functionbtn_block .search').hide();
        });
    }
    // 客服
    $('.customer_service_block').find('button').focusout(function() {
        $('.customer_service_block').slideUp();
    })
    //熱門文章
    // $("#b_news").click(function() {
    //     $("#b_cont").stop().fadeToggle(); 
    //     return false;
    // });
    // 業務專區
    $('.business_list ul li a').focus(function() {
        $(this).parents('.business_list').addClass('open');
        $(this).parents('.business_group').siblings().children('.business_list').removeClass('open');
    })
    //勞動統計
    $('.statistics_slider').slick({
        // dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 610,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 常見問答
    $('.frequentlyQA_tab .tabContent .QAblock ').each(function() {
        $(this).find('.Answer').first().show();
    });
    $('.QAblock .Question').click(function() {
        $(this).siblings('.Answer').hide();
        $(this).siblings('.Question').removeClass('active');
        $(this).next('.Answer').show();
        $(this).addClass('active');
    })
    $('.QAblock .Question').keyup(function() {
        $(this).next('.Answer').show();
    })
    // 社群連結
    $('.communitylink_group').find('.content').first().show();
    $('.communitylink_group .title>a').first().addClass('open');
    $('.communitylink_group .title>a').click(function() {
        $(this).parents().siblings('.communitylink_group').find('.content').stop().slideUp();
        $(this).parents().siblings('.communitylink_group').find('.title>a').removeClass('open');
        $(this).parent('.title').siblings('.content').stop().slideToggle();
        $(this).toggleClass('open');
    })
    //勞動部所屬機關
    $('.organization_slider').slick({
        // dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //主題網站
    $('.theme_slider').slick({
        // dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //外部連結
    $('.external_slider').slick({
        // dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 條件查詢
    $('.condition_searchbtn').click(function() {
        $('.condition_searchblock').stop().slideToggle();
    })
    // QA
    $(".accordionqa .accordionblock").each(function() {
        var _accordionItem2 = $(this).children(".Q");
        _accordionItem2.each(function() {
            function accordion2(e) {
                $(this).next(".A").slideToggle();
                $(this).parent().siblings().children(".A").slideUp();
                $(this).parent().siblings().children(".Q").removeClass("turnicon");
                $(this).toggleClass("turnicon");
                e.preventDefault();
            }
            $(this).click(accordion2);
            $(this).keyup(accordion2);
        });
    });
    // 收合
    $(".accordion_grounp .accordionblock").each(function() {
        var _accordionItem3 = $(this).children(".Q").children('a');
        var _word = _accordionItem3.children('.word');
        var _ullist = $(this).children('.answer').find('.answer_list');
        if (_ullist.length == 0) {
            _word.hide();
        } else {
            function accordion3(e) {
                if (_ullist.is(':visible')) {
                    _ullist.slideUp();
                    _word.text('展開').addClass('close');
                } else {
                    _ullist.slideDown();
                    _word.text('收合').removeClass('close');
                }
            }
            _accordionItem3.click(accordion3);
            // _accordionItem3.keyup(accordion3);
        }
    });
    // 我要發問
    var _ask_questions = $('.ask_questions').children('button');
    _ask_questions.click(function() {
        _ask_questions.siblings('.questions_block').stop().slideToggle();
    })
    _ask_questions.siblings('.questions_block').find('.close').click(function() {
        _ask_questions.siblings('.questions_block').stop().slideUp();
    })
    _ask_questions.keyup(function() {
        _ask_questions.siblings('.questions_block').slideDown();
    })
    $('.questions_block').find('li:last>a').focusout(function() {
        $('.questions_block').stop().slideUp();
    });
    // 紓困頁籤內的收合
    $('.precaution_list .title>a').click(function() {
        $(this).parents('.precaution_list').siblings('.precaution_list').find('.precaution_content').slideUp();
        $(this).parent('.title').siblings('.precaution_content').stop().slideToggle();
    });
});