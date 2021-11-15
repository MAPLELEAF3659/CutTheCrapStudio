$(".sideNav").sidebar({ speed: 400 });

$(".header-nav").click(function() {
    $(".sideNav").trigger("sidebar:open");
    $(".sideNav__bg").addClass("fadeIn");
});

$(".sideNav-btn-close").click(function() {
    $(".sideNav").trigger("sidebar:close");
    $(".sideNav__bg").removeClass("fadeIn");
});