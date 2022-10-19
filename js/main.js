


// main carousel 

$(document).ready(function () {
    $(".hero").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        smartSpeed: 2500,
        autoplayHoverPause: true,
    });

    $(".testimonial-boxes").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        smartSpeed: 2500,
        autoplayHoverPause: true,
        dots: false,
        nav: true
    });

});



// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    };
});



// alertbox 
function alertbox() {
    window.alert('Thank you for contacting us!');
};

// reset 
function reset() {
    document.getElementById('mc-embedded-subscribe-form').reset();
};