//-------------------------------------------------------------
// loadingscreen
//-------------------------------------------------------------

jQuery(window).on('load', function() {
    jQuery('body').addClass('loading--done');
    if (jQuery('.loading--done')) {
        setTimeout(function() {
            jQuery('.loadingscreen').remove();
        }, 2500);
    }
});