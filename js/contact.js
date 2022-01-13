var controller = new ScrollMagic.Controller();
var scene;

$(function() {
    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            duration: 0,
            triggerHook: 0.8
        })
        .offset(100)
        .setTween("#item1", 1, { opacity: 1 })
        .on("start", function(e) {
            phoneIconAnimation.goToAndPlay(0);
        })
        .addTo(controller);

    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            duration: 0,
            triggerHook: 0.8
        })
        .offset(100)
        .setTween("#item2", 1, { opacity: 1 })
        .on("start", function(e) {
            emailIconAnimation.goToAndPlay(0);
        })
        .addTo(controller);

    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            duration: 0,
            triggerHook: 0.8
        })
        .offset(100)
        .setTween("#item3", 1, { opacity: 1 })
        .on("start", function(e) {
            addressIconAnimation.goToAndPlay(0);
        })
        .addTo(controller);
});

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

var phoneIconAnimation = bodymovin.loadAnimation({
    container: document.getElementById('icon-phone'), // required
    path: 'image/contactUs/phone.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: true, // optional
});
var addressIconAnimation = bodymovin.loadAnimation({
    container: document.getElementById('icon-address'), // required
    path: 'image/contactUs/address.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: true, // optional
});
var emailIconAnimation = bodymovin.loadAnimation({
    container: document.getElementById('icon-email'), // required
    path: 'image/contactUs/mail.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: true, // optional
});

$("#info-title-phone").mouseover(function() {
    phoneIconAnimation.goToAndPlay(0);
});
$("#info-title-email").mouseover(function() {
    emailIconAnimation.goToAndPlay(0);
});
$("#info-title-address").mouseover(function() {
    addressIconAnimation.goToAndPlay(0);
});

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCsriGcqSA9rW52K7RLN3-ATn5QZ0E7r6s",
        authDomain: "ctcstudio-84f9a.firebaseapp.com",
        projectId: "ctcstudio-84f9a"
    });
} else {
    firebase.app(); // if already initialized, use that one
}

var db = firebase.firestore();
// db.collection("message").add({
//     userName: "Consumable",
//     userEmail: "ctcstudio@gmail.com",
//     userPhone: "0912345678",
//     userMessage: "Hi"
// })