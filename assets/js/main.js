(function($) {
    window.onload = function() {
        $(document).ready(function() {
            showMenuMobile();
            backToTop();
            showSearchMobile();
            stuckHeader();
            projectDetailNav();
        });
    };
})(jQuery);

function showMenuMobile() {
    if ($('.menu-mobile__bars').length || $('.header__bottom-menu').length || $('.menu-mobile__overlay').length || $('.menu-mobile-close').length) {
        $('.menu-mobile__bars').click(function() {
            $('.header__bottom-menu').addClass('active');
            $('.menu-mobile__overlay').addClass('overlay__show');
        });
        $('.menu-mobile-close').click(function() {
            $('.header__bottom-menu').removeClass('active');
            $('.menu-mobile__overlay').removeClass('overlay__show');
        });
        $('.menu-mobile__overlay').click(function() {
            $('.header__bottom-menu').removeClass('active');
            $('.menu-mobile__overlay').removeClass('overlay__show');
            $('.header__top-search').removeClass('active');
        })
    } else {
        return 0;
    }

    if ($('.li-plus').length) {
        $('.li-plus').click(function(e) {
            $(".sub-menu").toggleClass("active");
            $(this).toggleClass('clicked');
        });
    } else {
        return 0;
    }
}

function showSearchMobile() {
    if ($('.search-mobile').length) {
        $('.search-mobile').click(function() {
            $('.menu-mobile__overlay').addClass('overlay__show');
            $('.header__top-search').addClass('active');
        });
    } else {
        return 0;
    }
}

function backToTop() {

    var backToTop = document.querySelector('.backToTop');

    if (backToTop == null) {
        return 0;
    } else {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 400) {
                backToTop.classList.add('show__backToTop')
            } else {
                backToTop.classList.remove('show__backToTop')
            }
        })
        backToTop.addEventListener('click', function() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        })
    }
}

function stuckHeader() {
    if ($('.header__bottom').length || $('.nav-sticky').length) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 20) {
                $('.header__bottom').addClass('stuck')
            } else {
                $('.header__bottom').removeClass('stuck')
            }
        });
        $('.nav-sticky').css('top', $('.header__bottom').height() + 'px');
    }
}

function projectDetailNav() {
    // Scroll to section
    $(document).on('click', 'a[href^="#project-detail"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top - 150;
        // animated top scrolling
        $('body, html').animate({ scrollTop: pos });
    });

    // Active when scroll
    $(document).on("scroll", onScroll);

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.project-detail__nav ul li a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            var pos = refElement.position().top - 170;
            if (pos <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.project-detail__nav ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    };

    // Nav on mobile
    $('.show-nav-mobile').click(function(e) {
        $('.project-detail__nav').addClass('show-project-nav');
    })
    $('.close-nav-mobile').click(function(e) {
        $('.project-detail__nav').removeClass('show-project-nav');
    })
}