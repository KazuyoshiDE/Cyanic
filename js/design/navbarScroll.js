//-------------------------------------------------------------
// navbarScroll
//-------------------------------------------------------------

jQuery(document).on('scroll', function () {
    jQuery('.nav-link-icon-wrapper, .link_item ').each(function () {
        if (jQuery(this).offset().top > window.innerHeight) {
            jQuery(this).addClass('colorbrand');
        } else if (jQuery(this).hasClass('colorbrand')) {
            jQuery(this).removeClass('colorbrand');
        }
    })

    jQuery('.navbar').each(function () {
        if (jQuery(this).offset().top > window.innerHeight) {
            jQuery(this).addClass('bg-light');
        } else if (jQuery(this).hasClass('bg-light')) {
            jQuery(this).removeClass('bg-light');
        }
    })

    jQuery('.navbutton-wrapper').each(function () {
        if (jQuery(this).offset().top > 75) {
            jQuery(this).addClass('scrolled');
        } else if (jQuery(this).hasClass('scrolled')) {
            jQuery(this).removeClass('scrolled');
        }
    })
});
