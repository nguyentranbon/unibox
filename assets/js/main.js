jQuery(function ($) {
    // Click icon visible menu and overlay
    $('.uni-header__toggle').on('click', function(event){
        event.preventDefault();
        $('.uni-wrapper').addClass('offcanvas-active');
    });
    // Click hidden menu
    $('.offcanvas-overlay, .offcanvas-close').on('click', function(event){
        event.preventDefault();
        $('.uni-wrapper').removeClass('offcanvas-active');
    });

    // add icon plus when have class parent list
    if($('.mb-module__item').hasClass('mb-module__item-parent')){
         $('.mb-module__item-parent > a').append( "<span class='mb-module__icon-toggle'><i class='fas fa-plus-circle'></i></span>" );
    }
    

     $(document).on('click', '.offcanvas-inner .mb-module__icon-toggle', function(event){
        event.preventDefault();
        $(this).closest('.mb-module__item-parent').toggleClass('menu-parent-open').find('>.mb-module__menu-child').slideToggle(400);
    })
});