//-------------------------------------------------------------
// navbarOpen
//-------------------------------------------------------------

jQuery(document).ready(function () {
    jQuery('.navbar-toggle').on('click', function () {
        jQuery('.navbar').toggleClass('navbar--open');
        jQuery('.navbar-toggle').toggleClass('is-active');
        jQuery('.topnav_logo').toggleClass('opacity_zero');
        jQuery('.navbar-toggle').toggleClass('position-absolute');
        jQuery('body').toggleClass('no-scroll');
    });
});
