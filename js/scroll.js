// Script voor het scrollen naar een aangewezen anchor punt.
$('.smooth-scroll').click(function (e) {
    let target = $($(this).attr('href'));
    if (target.length) {
        let scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo + 'px'}, 800);
    }
});