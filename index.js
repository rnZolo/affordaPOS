// responsive nav bar
$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

// Nav effect
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (localStorage.lightMode == "light") {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".navbar").style.backgroundColor = "#F1F1F1";
        } else {
            document.querySelector(".navbar").style.backgroundColor = "transparent";
        }
    }
    else
    {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".navbar").style.backgroundColor = "#121013";
        } else {
            document.querySelector(".navbar").style.backgroundColor = "transparent";
        }
    }
}

// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
    if (e.target.className.indexOf('modal-target') !== -1) {
        var img = e.target;
        var modalImg = document.getElementById("modal-content");
        var captionText = document.getElementById("modal-caption");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
});

// darkmode
var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        app.setAttribute("light-mode", "dark");
}
    
function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
        document.querySelector(".navbar").style.backgroundColor = "#F1F1F1";
        document.getElementById("h").style.color = "#121013";
        document.getElementById("p").style.color = "#121013";
        document.getElementById("f").style.color = "#121013";
        document.getElementById("cl").style.color = "#121013";
        document.getElementById("co").style.color = "#121013";
        document.getElementById("bar1").style.backgroundColor = "#121013";
        document.getElementById("bar2").style.backgroundColor = "#121013";
        document.getElementById("bar3").style.backgroundColor = "#121013";
        document.getElementById("nav").style.backgroundColor = "#F1F1F1";
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
        document.querySelector(".navbar").style.backgroundColor = "#121013";
        document.getElementById("h").style.color = "#F1F1F1";
        document.getElementById("p").style.color = "#F1F1F1";
        document.getElementById("f").style.color = "#F1F1F1";
        document.getElementById("cl").style.color = "#F1F1F1";
        document.getElementById("co").style.color = "#F1F1F1";
        document.getElementById("bar1").style.backgroundColor = "#F1F1F1";
        document.getElementById("bar2").style.backgroundColor = "#F1F1F1";
        document.getElementById("bar3").style.backgroundColor = "#F1F1F1";
        document.getElementById("nav").style.backgroundColor = "#121013";
    }
}

window.addEventListener(
    "storage",
    function () {
        if (localStorage.lightMode == "dark") {
            app.setAttribute("light-mode", "dark");
        } else {
            app.setAttribute("light-mode", "light");
        }
    },
    false
);

// loadmore
$(document).ready(function(){
    $(".all-clients-item").slice(0, 12).show();
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".all-clients-item:hidden").slice(0, 12).slideDown();
        if($(".all-clients-item:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });
})

// loader

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function () {
            jQuery(document).ready(function() {
                jQuery('#loader').fadeOut(500);
                jQuery("#mybody").fadeIn(500);
            });
            document.getElementById("mybody").style.overflowY = "scroll";
        }, 1500);
        // for wip modal show
        setTimeout(function () {
            jQuery(document).ready(function() {
                jQuery(".modal-wip").fadeIn(500);
            });
        }, 5000);
    }
    else
    {
        document.getElementById("mybody").style.overflowY = "hidden";
    }
}

document.getElementById("exit-btn").addEventListener("click", HideWipModal);
function HideWipModal(){
    jQuery(".modal-wip").fadeOut(500);
}