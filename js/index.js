var controller = new ScrollMagic.Controller();

$(function(){
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 25})
    .setPin("#head1")
    .addIndicators()
    .addTo(controller);

    scene =  new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 50})
    .setPin("#head2")
    .addIndicators()
    .addTo(controller);

    scene =  new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 100})
    .setPin("#head3")
    .addIndicators()
    .addTo(controller);

    scene =  new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200})
    .setPin("#logo")
    .addIndicators()
    .addTo(controller);

    scene =  new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 600})
    .setPin("#hand")
    .addIndicators()
    .addTo(controller);

    scene =  new ScrollMagic.Scene({triggerElement: "#trigger2"})
    .setPin("#slogan")
    .setTween("#slogan", 0.5, {backgroundColor: "green", scale: 2.5})
    .addIndicators()
    .addTo(controller);

});