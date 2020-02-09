$(".tab-item").hide();

$("ul .tab-navigation li:first").addClass("active").show();

$(".tab-item:first").show();

$("ul.tab-navigation li").click(function () {

    $("ul.tab-navigation li").removeClass("active");

    $(this).addClass("active");

    $(".tab-item").hide();

    var activeTab = $(this).find("a").attr("href");

    $(activeTab).fadeIn();

    return false;
});