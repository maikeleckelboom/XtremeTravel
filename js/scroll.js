// Script voor het scrollen naar een aangewezen anchor punt.
$('.smooth-scroll').click(function (e) {
    let target = $($(this).attr('href'));
    if (target.length) {
        let scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo + 'px'}, 800);
    }
});



$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass("show");
    }
    else {
        $('header').removeClass("show");
    }
});



// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.

    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header, .off-canvas-content').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header, .off-canvas-content').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}