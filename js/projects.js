var controller = new ScrollMagic.Controller();
var scene;

mainAreaHeight = $('.main-title-text').height(); // container height
mainAreaWidth = $('.main-title').width(); // container width

$(function() {
    $(".main-circle").each(function() {
        randomtop = Math.random() * mainAreaHeight + 100;
        randomleft = Math.random() * mainAreaWidth - 24;
        $(this).css({
            'top': randomtop,
            'left': randomleft
        });

        // var speed = $(this).data('speed');
        // var translate = ($(window).scrollTop() - speed) / $(window).height() * 100;
        // $(this).css({ transform: 'translateY(' + translate + '%)' });
    });

    $(".ani-area").each(function() {
        scene = new ScrollMagic.Scene({
                triggerElement: this,
                duration: 100
            })
            .setPin(".ani-area-head")
            .addIndicaters()
            .addTo(controller);
    });
});

$(window).scroll(function() {
    $(".main-circle").each(function() {
        $(this).css({
            'margin-top': -$(window).scrollTop()
        });
    });
})

objectFitImages();