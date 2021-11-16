$(".sideNav").sidebar({ speed: 400 });

$(".header-nav").click(function() {
    $(".sideNav").css("z-index", 99);
    $(".sideNav").trigger("sidebar:open");
    $(".sideNav__bg").addClass("fadeIn");
});

$(".sideNav-btn-close").click(function() {
    $(".sideNav").trigger("sidebar:close");
    $(".sideNav__bg").removeClass("fadeIn");
});

$(".sideNav").on("sidebar:opened", function() {
    $(".sideNav").css("z-index", 99);
});

$(".sideNav").on("sidebar:closed", function() {
    $(".sideNav").css("z-index", -99);
});