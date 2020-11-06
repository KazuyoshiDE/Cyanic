//-------------------------------------------------------------
// particles JS
//-------------------------------------------------------------
if (jQuery(window).innerWidth() <= 2499) {
    particlesJS.load('particles-js', '../particles.json', function () { });
}

if (jQuery(window).innerWidth >= 2500) {
    alert('got big');
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
}
