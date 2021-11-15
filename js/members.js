var controller = new ScrollMagic.Controller();
var scene;

var lineHeight = $(".draw-ani-line").height();
$(".draw-ani-line").css("height", "0px");

$(function() {
    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger",
            duration: 1650
        })
        .setPin("#hand")
        .on("progress", function(e) {
            if (e.progress == 1) {
                $("#hand").addClass('fade-out');
            } else {
                $("#hand").removeClass('fade-out');
            }
            $(".draw-ani-line").css({
                'height': e.progress.toFixed(3) * lineHeight
            });
        })
        .addTo(controller);
});