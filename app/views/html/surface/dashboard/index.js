$(function(){
    $('#surfCloader').show();
    var mainPage = "dashboard";
    var thisPage = "default";
    $('.csidenavtitles').removeClass("active");
    $('.csidenavtitles a').removeClass("active");
    $('#'+mainPage+"Main").addClass("active");
    $('#'+mainPage+thisPage+"Main").addClass("active");
    $('#'+mainPage+thisPage+"Main a").addClass("active");
    $('#surfCloader').hide();
})