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
        },
    });
    $('.adSlider').slick({
        // dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
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
                dots: true,
            },
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        }, ],
    });
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
                dots: true,
            },
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        }, ],
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
        infinite: true,
    });
    $('.cp .Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
    });
    // $(".mpSyncing_slider .Slider-for").on("init reInit afterChange", function(event, slick, currentSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $(".controls").html(i + "/" + slick.slideCount);
    // });
    // if ($(".Slider-nav .img-container").length <= 1) {
    //     $(".Slider-nav").empty();
    // } else {
    //     $(".mpSyncing_slider .Slider-for").slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         autoplay: true,
    //         fade: true,
    //         swipe: true,
    //         swipeToSlide: true,
    //         lazyLoad: "ondemand",
    //         asNavFor: ".Slider-nav",
    //         infinite: true,
    //     });
    //     $(".mpSyncing_slider .Slider-nav").slick({
    //         slidesToShow: Math.min(5, $(".Slider-nav .img-container").length - 1),
    //         slidesToScroll: 1,
    //         asNavFor: ".Slider-for",
    //         dots: false,
    //         arrows: true,
    //         lazyLoad: "ondemand",
    //         focusOnSelect: true,
    //         infinite: true,
    //         // variableWidth: true,
    //         responsive: [{
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: Math.min(4, $(".Slider-nav .img-container").length - 1),
    //                 slidesToScroll: 1,
    //             },
    //         }, {
    //             breakpoint: 800,
    //             settings: {
    //                 slidesToShow: Math.min(3, $(".Slider-nav .img-container").length - 1),
    //                 slidesToScroll: 1,
    //             },
    //         }, {
    //             breakpoint: 575,
    //             settings: {
    //                 slidesToShow: Math.min(2, $(".Slider-nav .img-container").length - 1),
    //                 slidesToScroll: 1,
    //             },
    //         }, {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: Math.min(1, $(".Slider-nav .img-container").length ),
    //                 slidesToScroll: 1,
    //             },
    //         }, ],
    //     });
    // }
    //
    //
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
    });
    //熱門文章
    // $("#b_news").click(function() {
    //     $("#b_cont").stop().fadeToggle();
    //     return false;
    // });
    // 業務專區
    $('.business_list ul li a').focus(function() {
        $(this).parents('.business_list').addClass('open');
        $(this).parents('.business_group').siblings().children('.business_list').removeClass('open');
    });
    $('.business_list').mouseout(function() {
        $(this).removeClass('open');
    });
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
            },
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        }, {
            breakpoint: 610,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
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
    });
    $('.QAblock .Question').keyup(function() {
        $(this).next('.Answer').show();
    });
    // 社群連結
    $('.communitylink_group').find('.content').first().show();
    $('.communitylink_group .title>a').first().addClass('open');
    $('.communitylink_group .title>a').click(function() {
        $(this).parents().siblings('.communitylink_group').find('.content').stop().slideUp();
        $(this).parents().siblings('.communitylink_group').find('.title>a').removeClass('open');
        $(this).parent('.title').siblings('.content').stop().slideToggle();
        $(this).toggleClass('open');
    });
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
            },
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
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
            },
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
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
            },
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
    });
    // 條件查詢
    $('.condition_searchbtn').click(function() {
        $('.condition_searchblock').stop().slideToggle();
    });
    // QA
    $('.accordionqa .accordionblock').each(function() {
        var _accordionItem2 = $(this).children('.Q');
        _accordionItem2.each(function() {
            function accordion2(e) {
                $(this).next('.A').slideToggle();
                $(this).parent().siblings().children('.A').slideUp();
                $(this).parent().siblings().children('.Q').removeClass('turnicon');
                $(this).toggleClass('turnicon');
                e.preventDefault();
            }
            $(this).click(accordion2);
            $(this).keyup(accordion2);
        });
    });
    // 收合
    $('.accordion_grounp .accordionblock').each(function() {
        var _accordionItem3 = $(this).children('.Q').children('a');
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
    });
    _ask_questions.siblings('.questions_block').find('.close').click(function() {
        _ask_questions.siblings('.questions_block').stop().slideUp();
    });
    _ask_questions.keyup(function() {
        _ask_questions.siblings('.questions_block').slideDown();
    });
    $('.questions_block').find('li:last>a').focusout(function() {
        $('.questions_block').stop().slideUp();
    });
    // 紓困頁籤內的收合
    $('.precaution_list .title>a').click(function() {
        $(this).parents('.precaution_list').siblings('.precaution_list').find('.precaution_content').slideUp();
        $(this).parent('.title').siblings('.precaution_content').stop().slideToggle();
    });
    // 快捷列
    $(function() {
        $('.fixed_sidebar_group .sidebar_list a').each(function(index, el) {
            $(this).bind('click', function() {
                var num = $(this).parent('.sidebar_list').index() + 1;
                //先抓每一個li的序列，index從0開始，所以要+1
                $('body,html').stop(true, true).animate({
                    scrollTop: $('.s_' + num).offset().top,
                }, 0, 'easeOutExpo');
                //移動body scrollTop，做動畫，去取對應的section序列設定為offset=0，把該section推到最頂端
                // $('.s_' + num).find('a:first').focus();//可以這樣加
                $('.s_' + num).find('.firstlink').focus(); //可以這樣加
                return false;
            });
        });
    });
    
    function marquee(state) {
        const marquee = document.querySelector('.marquee');
        const marqueeOuter = marquee.querySelector('.marqueeOuter');
        const marqueeBox = marquee.querySelector('.marqueeBox');
        const marqueeItem = marquee.querySelectorAll('.marqueeItem a');
        const body = document.querySelector('body');
        const firstItem = marqueeItem[0];
        const lastItem = marqueeItem[marqueeItem.length - 1];
        let marqueeSpeed = state.speed;
        let clone = marqueeBox.cloneNode(true);
        let check = false;
        let mouse = false;
        const marqueeContent = () => {
            const marqueeOuterWidth = marqueeOuter.offsetWidth;
            const marqueeBoxWidth = marqueeBox.clientWidth;
            const outerWidth = marquee.offsetWidth;
            const bodyWidth = body.offsetWidth;
            if (marqueeBoxWidth > outerWidth) {
                marqueeOuter.appendChild(clone);
                const cloneFocus = clone.querySelectorAll('a,input,button,select');
                const marqueeBoxAll = marquee.querySelectorAll('.marqueeBox');
                let sliderMovePx = 0;
                let request;
                cloneFocus.forEach((item, index) => {
                    item.setAttribute('tabindex', '-1');
                });
                const animation = () => {
                    sliderMovePx++;
                    if (sliderMovePx / marqueeSpeed < marqueeBoxWidth) {
                        marqueeBoxAll.forEach((item, index) => {
                            item.style = `transform:translateX(-${sliderMovePx / marqueeSpeed}px)`;
                        });
                    } else {
                        sliderMovePx = 0;
                    }
                    request = requestAnimationFrame(animation);
                };
                marquee.addEventListener('mouseenter', function() {
                    if (!mouse) {
                        cancelAnimationFrame(request);
                        mouse = true;
                    }
                });
                marquee.addEventListener('mouseleave', function() {
                    if (mouse) {
                        clone.style.display = 'block';
                        lastItem.parentElement.parentElement.parentElement.style.display = 'flex';
                        marqueeItem.forEach((v) => {
                            v.parentElement.removeAttribute('style');
                        });
                        cancelAnimationFrame(request);
                        requestAnimationFrame(animation);
                        mouse = false;
                    }
                });
                cancelAnimationFrame(request);
                requestAnimationFrame(animation);
                check = true;
                ////////////////////////
                firstItem.addEventListener('focus', function() {
                    firstItem.parentElement.parentElement.style = 'display:block;width:100%;transform:translateX(0px);';
                    clone.style = 'display:none;';
                    const siblings = [...firstItem.parentElement.parentElement.children].filter((child) => {
                        return child !== firstItem.parentElement;
                    });
                    siblings.forEach((v) => {
                        v.style.display = 'none';
                    });
                    cancelAnimationFrame(request);
                    check = true;
                });
                lastItem.addEventListener('focus', function() {
                    lastItem.parentElement.parentElement.style = 'display:block;width:100%;transform:translateX(0px);';
                    clone.style = 'display:none;';
                    const siblings = [...lastItem.parentElement.parentElement.children].filter((child) => {
                        return child !== lastItem.parentElement;
                    });
                    siblings.forEach((v) => {
                        v.style.display = 'none';
                    });
                    cancelAnimationFrame(request);
                    check = true;
                });
                marqueeItem.forEach((item, index) => {
                    item.addEventListener('keydown', function(e) {
                        mouse = false;
                        if (e.which === 9 && !e.shiftKey && item !== lastItem) {
                            // e.preventDefault();
                            //tab
                            marqueeItem.forEach((item) => {
                                item.parentElement.style.display = 'none';
                            });
                            marqueeItem[index + 1].parentElement.style.display = 'block';
                            marqueeItem[index].focus();
                            if (item !== lastItem) {} else {}
                            cancelAnimationFrame(request);
                        } else if (e.which === 9 && !e.shiftKey && item === lastItem) {
                            clone.style.display = 'block';
                            lastItem.parentElement.parentElement.parentElement.style.display = 'flex';
                            marqueeItem.forEach((v) => {
                                v.parentElement.removeAttribute('style');
                            });
                            check = false;
                            cancelAnimationFrame(request);
                            requestAnimationFrame(animation);
                        } else if (e.which === 9 && e.shiftKey && item !== firstItem) {
                            item.parentElement.parentElement.style = 'display:block;width:100%;transform:translateX(0px);';
                            marqueeItem.forEach((item) => {
                                item.parentElement.style.display = 'none';
                            });
                            clone.style = 'display:none;';
                            marqueeItem[index - 1].parentElement.style.display = 'block';
                            marqueeItem[index].focus();
                            cancelAnimationFrame(request);
                        } else if (e.which === 9 && e.shiftKey && item === firstItem) {
                            clone.style.display = 'block';
                            firstItem.parentElement.parentElement.parentElement.style.display = 'flex';
                            marqueeItem.forEach((v) => {
                                v.parentElement.removeAttribute('style');
                            });
                            check = false;
                            cancelAnimationFrame(request);
                            requestAnimationFrame(animation);
                        }
                    });
                });
                window.addEventListener('keydown', function(e) {
                    if (e.which === 9 && !e.shiftKey) {} else if (e.which === 9 && e.shiftKey) {}
                });
                ////////////////////////
            }
        };
        window.addEventListener('load', marqueeContent);
        window.addEventListener('resize', marqueeContent);
    }
    marquee({
        speed: 1, //越低越快
    });
});
// svg
$(function() {
    jQuery('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
});