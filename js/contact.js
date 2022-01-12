$(window).scroll(function() {
    $("#title-image1").css({
        'margin-top': -$(window).scrollTop() * 0.25
    });
    $("#title-image2").css({
        'margin-top': -$(window).scrollTop() * 0.4
    });
    $("#title-image3").css({
        'margin-top': -$(window).scrollTop() * 0.55
    });
});