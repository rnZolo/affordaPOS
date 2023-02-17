// responsive nav bar
document.querySelector(".menu-toggle").addEventListener("click", ToggleNav)
function ToggleNav()
{
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
    f.style.display = "none";
    cl.style.display = "none";
    e.style.display = "none";
    clm.style.display = "none";
}

//close mobile nav after selecting
document.querySelector(".drop-down-clients-mobile").addEventListener("click", closeNav)
function closeNav()
{
    location.href = './allclients.html';
}

// features
const option1 = document.querySelector('input[value="resto"]');
const option2 = document.querySelector('input[value="retail"]');
const restoFt = document.getElementById('restoFt');
const retailFt = document.getElementById('retailFt');
const retailspan = document.getElementById('retailFtBtn')
const restospan = document.getElementById('restoFtBtn')

function hideResto() {
    restoFt.style.display = "none";
}
function hideRet() {
    retailFt.style.display = "none";
}
function activeresto() {
    restospan.classList.add('active-ft')
    retailspan.classList.remove('active-ft')
}
function activeret() {
    retailspan.classList.add('active-ft')
    restospan.classList.remove('active-ft')
}
option1.addEventListener('click', function () {
    restoFt.style.display = "block";
    hideRet()
    activeresto()
});

option2.addEventListener('click', function() {
    retailFt.style.display = "block";
    hideResto()
    activeret()
});


// drop-down features
document.querySelector("#f").addEventListener("click", Features);
var f = document.querySelector(".drop-down-features");// dropdown in large
var e = document.querySelector(".drop-down-features-mobile"); //dropdown in small

function Features() {
    if (window.innerWidth <= 720){ // if window is small
        if (e.style.display === "none")// if small-ftdropdown is not visible 
        {
            e.style.display = "block"; //set smallscreen-FTdropdown to become visible
            cl.style.display = "none"; //set largesreen-Cldropdown to no visible
        }
        else// if small-Ftdropdown is visible
            {
            e.style.display = "none"; //set small-Ftdropdown to not visible
        }
    }else{ // if window id large
        if (f.style.display === "none")//if large-ftdropdown is not visible
        {
            f.style.display = "block"; //set large-ftdropdown to visible
            cl.style.display = "none"; // set large-Cldropdown to not visible
        }
    else //if large-ftdropdown is visible
        {
            f.style.display = "none"; // set large-Ftdropdown to not visible
        }
    }
}


window.addEventListener("resize", Resize)
function Resize()
{
    cl.style.display = "none";
    f.style.display = "none";
    e.style.display = "none";
    clm.style.display = "none";
}

// drop-down clients
document.querySelector("#cl").addEventListener("click", Clients);
var cl = document.querySelector(".drop-down-clients");
var clm = document.querySelector(".drop-down-clients-mobile");

function Clients() {
    if (window.innerWidth <= 720){ // if window is small
        if (clm.style.display === "none")// if small-CLdropdown is not visible 
        {
            clm.style.display = "block"; //set smallscreen-FTdropdown to become visible
            f.style.display = "none"; //set largesreen-Cldropdown to no visible
        }
        else// if small-Ftdropdown is visible
        {
            clm.style.display = "none"; //set large-cldropdown to not visible
        }
    }else{ // if window id large
        if (cl.style.display === "none")//if large-cldropdown is not visible
        {
            cl.style.display = "block"; //set large-cldropdown to visible
            f.style.display = "none"; // set small-ftdropdown to not visible
        }
    else //if large-ftdropdown is visible
        {
            cl.style.display = "none"; // set large-cldropdown to not visible
        }
    }
}

cl.addEventListener("click", ClientClose); //after select from the clients list the dropdown clients on large screen will automatically close
function ClientClose()
{
    cl.style.display = "none";
}

f.addEventListener("click", FeaturesClose); //after select from the features list the dropdown features on large screen will automatically close
function FeaturesClose()
{
    f.style.display = "none";
}

// Nav effect
window.onscroll = function () { scrollFunction() };// scroll will close the active drop down
function scrollFunction() {
    cl.style.display = "none";
    f.style.display = "none";
}

// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function () {
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

function toggle_light_mode() {//navbar mode
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
$(document).ready(function () {
    $(".all-clients-item").slice(0, 12).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".all-clients-item:hidden").slice(0, 12).slideDown();
        if ($(".all-clients-item:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });
})

// loader
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function () {
            jQuery(document).ready(function () {
                jQuery('#loader').fadeOut(500);
                jQuery("#mybody").fadeIn(500);
            });
            document.getElementById("mybody").style.overflowY = "scroll";
        },1000);
        // for wip modal show
        // setTimeout(function () {
        //     jQuery(document).ready(function () {
        //         jQuery(".modal-wip").fadeIn(500);
        //     });
        // }, 5000);
    }
    else {
        document.getElementById("mybody").style.overflowY = "hidden";
    }
}

// document.getElementById("exit-btn").addEventListener("click", HideWipModal);
// function HideWipModal() {
//     jQuery(".modal-wip").fadeOut(500);
// }

