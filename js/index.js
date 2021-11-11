var controller = new ScrollMagic.Controller();
var scene;

$(function () {
    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 25 })
        .setPin("#head1")
        .addIndicators()
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 50 })
        .setPin("#head2")
        .addIndicators()
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 100 })
        .setPin("#head3")
        .addIndicators()
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 200 })
        .setPin("#logo")
        .addIndicators()
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 600 })
        .setPin("#hand")
        .addIndicators()
        .addTo(controller);
        
    scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 1 })
    .setPin("#slogan")
    .addIndicators()
    .addTo(controller);
});