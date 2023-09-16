(function($) {
    "use strict";

    jQuery(document).ready(function($) {

    });

});
jQuery(window).load(function() {

});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});