// responsive nav bar
$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

// Nav effect
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("mynav").style.backgroundColor = "#F1F1F1";
    } else {
        document.getElementById("mynav").style.backgroundColor = "transparent";
    }
}