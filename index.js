/////////////////////////////////////////////////////////////////////////MMOBILE NAVIGATOR////////////////////////////////////////////////////////////////////////////////////
// harware-items
document.querySelector(".hardwarem").addEventListener("click", Hardwarem);
function Hardwarem() {
    Hardware();
}

// convinience-items
document.querySelector(".grocerym").addEventListener("click", Grocerym);
function Grocerym() {
    Grocery();
}

// grocery-items
document.querySelector(".conviniencem").addEventListener("click", Conviniencem);
function Conviniencem() {
    Convinience();
}

// pharmacy-items
document.querySelector(".pharmacym").addEventListener("click", Pharmacym);
function Pharmacym() {
    Pharmacy();
}

// Phone-items
document.querySelector(".phonem").addEventListener("click", Phonem);
function Phonem() {
    Phone();
}

// Restaurant-items
document.querySelector(".restaurantm").addEventListener("click", Restaurantm);
function Restaurantm() {
    Restaurant();
}


// Retail-items
document.querySelector(".retailm").addEventListener("click", Retailm);
function Retailm() {
    Retail();
}

//SariSari-items
document.querySelector(".sarim").addEventListener("click", Sarim);
function Sarim() {
    Sari();
}

// Skin-items
document.querySelector(".skinm").addEventListener("click", Skinm);
function Skinm() {
    Skin();
}

// Vet-items
document.querySelector(".vetm").addEventListener("click", Vetm);
function Vetm() {
    Vet();
}

// Pasalubong-items
document.querySelector(".pasalubongm").addEventListener("click", Pasalubongm);
function Pasalubongm() {
    Pasalubong();
}

// other-items
document.querySelector(".othersm").addEventListener("click", Otherm);
function Otherm() {
    Other();
}

//DESKTOP NAV
// convinience
document.querySelector(".convinience").addEventListener("click", Convinience)
function Convinience() {
    localStorage.setItem("content", "convinience");
    location.href = './pages/allclients.html';
}

// hardware
document.querySelector(".hardware").addEventListener("click", Hardware)
function Hardware() {
    localStorage.setItem("content", "hardware");
    location.href = './pages/allclients.html';
}

// pharmacy-items
document.querySelector(".pharmacy").addEventListener("click", Pharmacy);
function Pharmacy() {
    localStorage.setItem("content", "pharmacy");
    location.href = './pages/allclients.html';
}

// Phone-items
document.querySelector(".phone").addEventListener("click", Phone);
function Phone() {
    localStorage.setItem("content", "phone");
    location.href = './pages/allclients.html';
}

// Restaurant-items
document.querySelector(".restaurant").addEventListener("click", Restaurant);
function Restaurant() {
    localStorage.setItem("content", "restaurant");
    location.href = './pages/allclients.html';
}

// Retail-items
document.querySelector(".retail").addEventListener("click", Retail);
function Retail() {
    localStorage.setItem("content", "retail");
    location.href = './pages/allclients.html';
}

//SariSari-items
document.querySelector(".sari").addEventListener("click", Sari);
function Sari() {
    localStorage.setItem("content", "sari");
    location.href = './pages/allclients.html';
}

// Skin-items
document.querySelector(".skin").addEventListener("click", Skin);
function Skin() {
    localStorage.setItem("content", "skin");
    location.href = './pages/allclients.html';
}

// Vet-items
document.querySelector(".vet").addEventListener("click", Vet);
function Vet() {
    localStorage.setItem("content", "vet");
    location.href = './pages/allclients.html';
}

// Pasalubong-items
document.querySelector(".pasalubong").addEventListener("click", Pasalubong);
function Pasalubong() {
    localStorage.setItem("content", "pasalubong");
    location.href = './pages/allclients.html';
}

// other-items
document.querySelector(".others").addEventListener("click", Other);
function Other() {
    localStorage.setItem("content", "other");
    location.href = './pages/allclients.html';
}

// grocery-items
document.querySelector(".grocery").addEventListener("click", Grocery);
function Grocery() {
    localStorage.setItem("content", "grocery");
    location.href = './pages/allclients.html';
}

// 

// responsive nav bar
document.querySelector(".menu-toggle").addEventListener("click", ToggleNav)
function ToggleNav() {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
    f.style.display = "none";
    cl.style.display = "none";
    e.style.display = "none";
    clm.style.display = "none";
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

option2.addEventListener('click', function () {
    retailFt.style.display = "block";
    hideResto()
    activeret()
});


// dropdown products
const products = document.querySelector("#pro")
products.addEventListener("click", productsDropdown)
const productsdrop = document.querySelector(".drop-down-products")
const productsdropmobile = document.querySelector(".drop-down-products-mobile")
function productsDropdown() {
    if (window.innerWidth <= 720) {
        if (productsdropmobile.style.display == "none") {
            productsdropmobile.style.display = "grid";
        }
        else {
            productsdropmobile.style.display = "none";
        }
    }
    else {
        if (productsdrop.style.display == "none") {
            productsdrop.style.display = "grid";
            cl.style.display = "none";
            f.style.display = "none";
        }
        else {
            productsdrop.style.display = "none";
        }
    }
}

// drop-down features
document.querySelector("#f").addEventListener("click", Features);
var f = document.querySelector(".drop-down-features");// dropdown in large
var e = document.querySelector(".drop-down-features-mobile"); //dropdown in small

function Features() {
    if (window.innerWidth <= 720) { // if window is small
        if (e.style.display === "none")// if small-ftdropdown is not visible 
        {
            e.style.display = "block"; //set smallscreen-FTdropdown to become visible
            cl.style.display = "none"; //set largesreen-Cldropdown to no visible
        }
        else// if small-Ftdropdown is visible
        {
            e.style.display = "none"; //set small-Ftdropdown to not visible
        }
    } else { // if window id large
        if (f.style.display === "none")//if large-ftdropdown is not visible
        {
            f.style.display = "block"; //set large-ftdropdown to visible
            cl.style.display = "none"; // set large-Cldropdown to not visible
            productsdrop.style.display = "none"
        }
        else //if large-ftdropdown is visible
        {
            f.style.display = "none"; // set large-Ftdropdown to not visible
        }
    }
}


window.addEventListener("resize", Resize)
function Resize() {
    cl.style.display = "none";
    f.style.display = "none";
    e.style.display = "none";
    clm.style.display = "none";
    productsdropmobile.style.display = "none";
    productsdrop.style.display = "none";
}

// drop-down clients
document.querySelector("#cl").addEventListener("click", Clients);
var cl = document.querySelector(".drop-down-clients");
var clm = document.querySelector(".drop-down-clients-mobile");

function Clients() {
    if (window.innerWidth <= 720) { // if window is small
        if (clm.style.display === "none")// if small-CLdropdown is not visible 
        {
            clm.style.display = "block"; //set smallscreen-FTdropdown to become visible
            f.style.display = "none"; //set largesreen-Cldropdown to no visible
        }
        else// if small-Ftdropdown is visible
        {
            clm.style.display = "none"; //set large-cldropdown to not visible
        }
    } else { // if window id large
        if (cl.style.display === "none")//if large-cldropdown is not visible
        {
            cl.style.display = "block"; //set large-cldropdown to visible
            f.style.display = "none"; // set small-ftdropdown to not visible
            productsdrop.style.display = "none"
        }
        else //if large-ftdropdown is visible
        {
            cl.style.display = "none"; // set large-cldropdown to not visible
        }
    }
}

cl.addEventListener("click", ClientClose); //after select from the clients list the dropdown clients on large screen will automatically close
function ClientClose() {
    cl.style.display = "none";
}

f.addEventListener("click", FeaturesClose); //after select from the features list the dropdown features on large screen will automatically close
function FeaturesClose() {
    f.style.display = "none";
}

// Nav effect
window.onscroll = function () { scrollFunction() };// scroll will close the active drop down
function scrollFunction() {
    cl.style.display = "none";
    f.style.display = "none";
    productsdrop.style.display = "none";
    progressBarScroll();
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


const navbar = document.querySelector(".navbar");
const h = document.getElementById("h");
const p = document.getElementById("p");
const ff = document.getElementById("f");
const clcon = document.getElementById("cl");
const co = document.getElementById("co");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const nav = document.getElementById("nav");

function toggle_light_mode() {//navbar mode
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
        navbar.style.backgroundColor = "#f1f1f1"
        h.style.color = "#121013";
        p.style.color = "#121013";
        ff.style.color = "#121013";
        clcon.style.color = "#121013";
        co.style.color = "#121013";
        bar1.style.backgroundColor = "#121013";
        bar2.style.backgroundColor = "#121013";
        bar3.style.backgroundColor = "#121013";
        nav.style.backgroundColor = "#F1F1F1";
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
        navbar.style.backgroundColor = "#121013";
        h.style.color = "#F1F1F1";
        p.style.color = "#F1F1F1";
        ff.style.color = "#F1F1F1";
        clcon.style.color = "#F1F1F1";
        co.style.color = "#F1F1F1";
        bar1.style.backgroundColor = "#F1F1F1";
        bar2.style.backgroundColor = "#F1F1F1";
        bar3.style.backgroundColor = "#F1F1F1";
        nav.style.backgroundColor = "#121013";
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
        }, 1000);
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

//MESSENGER PLUGIN
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "342464657012399");
chatbox.setAttribute("attribution", "biz_inbox");

// Your SDK code 
window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v16.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//MESSENGER PLUG IN END

//SCROLL BAR PROGRESS
function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// RESTO MOBILE   
const RestoRemotechevron = document.querySelector(".resto-remote-icon");
const RestoInterfacechevron = document.querySelector(".resto-interface-icon");
const Restorandwchevron = document.querySelector(".resto-randw-icon");
const Restodiscountschevron = document.querySelector(".resto-discounts-icon");
const Restoinventorychevron = document.querySelector(".resto-inventory-icon");
const Restocashflowchevron = document.querySelector(".resto-cashflow-icon");
const Restoreportschevron = document.querySelector(".resto-reports-icon");


document.querySelector(".resto-content-remote").addEventListener("click", Restoremote);
function Restoremote() {
    $(".resto-content-remote p").slideToggle("fast");
    RestoRemotechevron.classList.toggle("icon-rotate");
}

document.querySelector(".resto-content-interface").addEventListener("click", Restointerface);
function Restointerface() {
    $(".resto-content-interface ul").slideToggle("fast");
    RestoInterfacechevron.classList.toggle("icon-rotate");
}

document.querySelector(".resto-content-retailandwholesale").addEventListener("click", Restorandw);
function Restorandw() {
    $(".resto-content-retailandwholesale ul").slideToggle("fast");
    Restorandwchevron.classList.toggle("icon-rotate");
}

document.querySelector(".resto-content-discounts").addEventListener("click", Restodiscounts);
function Restodiscounts() {
    $(".resto-content-discounts ul").slideToggle("fast");
    Restodiscountschevron.classList.toggle("icon-rotate");
}

document.querySelector(".resto-content-inventory").addEventListener("click", Restoinventory);
function Restoinventory() {
    $(".resto-content-inventory ul").slideToggle("fast");
    Restoinventorychevron.classList.toggle("icon-rotate");
}

document.querySelector(".resto-content-cashflow").addEventListener("click", Restocashflow);
function Restocashflow() {
    $(".resto-content-cashflow ul").slideToggle("fast");
    Restocashflowchevron.classList.toggle("icon-rotate");
}

document.querySelector(".resto-content-reports").addEventListener("click", Restoreports);
function Restoreports() {
    $(".resto-content-reports ul").slideToggle("fast");
    Restoreportschevron.classList.toggle("icon-rotate");
}

// RETAIL MOBILE   
const RetailRemotechevron = document.querySelector(".retail-remote-icon");
const RetailInterfacechevron = document.querySelector(".retail-interface-icon");
const Retailrandwchevron = document.querySelector(".retail-randw-icon");
const Retaildiscountschevron = document.querySelector(".retail-discounts-icon");
const Retailinventorychevron = document.querySelector(".retail-inventory-icon");
const Retailcashflowchevron = document.querySelector(".retail-cashflow-icon");
const Retailreportschevron = document.querySelector(".retail-reports-icon");
const Retailbarcodechevron = document.querySelector(".retail-barcode-icon");


document.querySelector(".retail-content-remote").addEventListener("click", Retailremote);
function Retailremote() {
    $(".retail-content-remote p").slideToggle("fast");
    RetailRemotechevron.classList.toggle("icon-rotate");
}

document.querySelector(".retail-content-interface").addEventListener("click", Retailinterface);
function Retailinterface() {
    $(".retail-content-interface ul").slideToggle("fast");
    RetailInterfacechevron.classList.toggle("icon-rotate");
}

document.querySelector(".retail-content-retailandwholesale").addEventListener("click", Retailrandw);
function Retailrandw() {
    $(".retail-content-retailandwholesale p").slideToggle("fast");
    Retailrandwchevron.classList.toggle("icon-rotate");
}

document.querySelector(".retail-content-discounts").addEventListener("click", Retaildiscounts);
function Retaildiscounts() {
    $(".retail-content-discounts ul").slideToggle("fast");
    Retaildiscountschevron.classList.toggle("icon-rotate");
}

document.querySelector(".retail-content-inventory").addEventListener("click", Retailinventory);
function Retailinventory() {
    $(".retail-content-inventory ul").slideToggle("fast");
    Retailinventorychevron.classList.toggle("icon-rotate");
}

document.querySelector(".retail-content-cashflow").addEventListener("click", Retailcashflow);
function Retailcashflow() {
    $(".retail-content-cashflow ul").slideToggle("fast");
    Retailcashflowchevron.classList.toggle("icon-rotate");
}

document.querySelector(".retail-content-reports").addEventListener("click", Retailreports);
function Retailreports() {
    $(".retail-content-reports ul").slideToggle("fast");
    Retailreportschevron.classList.toggle("icon-rotate");
}

document.querySelector(".retail-content-barcode").addEventListener("click", Retailbarcode);
function Retailbarcode() {
    $(".retail-content-barcode p").slideToggle("fast");
    Retailbarcodechevron.classList.toggle("icon-rotate");
}

// POS-Android-window-Base
//btns
const posBtns = document.querySelectorAll('.pos-heading')
const navPosBtns = document.querySelectorAll('.BasedBTN')
const navPosBtnsMob = document.querySelectorAll('.BasedBTNMob')

// target elements
const androidBased = document.querySelector('.android-based')
const windowBased = document.querySelector('.window-based')
windowBased.style.display = 'none'

function posbased(nd, grp, t1, t2) {
    for (nd of grp)
        nd.addEventListener('click', function () {
            console.log(nd)
            if (this !== grp[0]) {
                t2.style.display = 'block'
                t1.style.display = 'none'

                if (grp === posBtns) {
                    this.style.width = '300px'
                    grp[0].style.width = '250px'
                }
            } else {
                t1.style.display = 'block'
                t2.style.display = 'none'

                if (grp === posBtns) {
                    this.style.width = '300px'
                    grp[1].style.width = '250px'
                }
            }
        })
}
let posBtn, navPosBtn, navPosBtnMob
posbased(posBtn, posBtns, androidBased, windowBased)
posbased(navPosBtn, navPosBtns, androidBased, windowBased)
posbased(navPosBtnMob, navPosBtnsMob, androidBased, windowBased)

// for(const posBtn of posBtns){
//     posBtn.addEventListener('click',function(){
//     if (this !== posBtns[0]){ 
//         windowBased.style.display = 'block'
//         androidBased.style.display = 'none'
//         this.style.width = '300px'
//         posBtns[0].style.width = '250px'
//     }else{
//         androidBased.style.display = 'block'
//         windowBased.style.display = 'none'
//         this.style.width = '300px'
//         posBtns[1].style.width = '250px'
//     }
//     })
// }



const itemDashB = document.querySelector('.item-dashb'),
    itemSM = document.querySelector('.item-SM'),
    itemSRM = document.querySelector('.item-SRM'),
    itemIM = document.querySelector('.item-IM'),
    itemPM = document.querySelector('.item-PM'),
    itemCM = document.querySelector('.item-CM'),
    itemSS = document.querySelector('.item-SS'),
    itemCrt = document.querySelector('.item-Crt'),
    itemOf = document.querySelector('.item-Of')

let dashB = {
    title: 'Dashboard',
    list: [" Data summary "]
},
    sm = {
        title: 'Sales Management',
        list: ["Sales Transaction/Cashiering", "Starting Cash", " Cash Drop", " Cash Count", "Cash Counter", "Sales Quotation", "Credits/Pay Later", "Secondary Display/Customer Display", " Discounts", " Hold Transaction", "Customer/Membership", "Price Check", "Order Print", "Senior Citizen/PWD Discount", " Custom discount (Amount or Percent)", "Void transaction with password (Item and Discount)", "Change Selling Price", " Barcode / Search Item Name", " Cash, Credit Card, and other MOP available"]
    },
    srm = {
        title: 'Sales Report Management',
        list: ["Pending Quotaion List", "Receipt/Invoice List (Can be filter by Cashier, MOP and by date range)", "Export Sales", "Cancel Sales/Transaction", "Credit Status", "Store Report", " Staff Report", "Store Calendar Report", " Members Report", "Item Sales", " Discount Report", "Credit Report", "Category Sales", "Stock Card (History trail)", "Stock/Pull Out", "Out of Stock Items Report", "Best Seller Items", "Item Expiry Report", "Expiration notification", " Item Return Report", "Expenses Report", "Cash Logs", "Mode of Payment Breakdown Report", "Top-up Reports", "Supplier PO Item Report"],
    },
    im = {
        title: 'Inventory Management',
        list: ["Item Masterlist", "Item Category", "Stock In", "Stock Out", "Warehouse Inventory", "Stock Transfer (Warehouse to Store stock transfer)", "Price Adjustment", "Purchase Order", " Receiving Order", "Supplier"],
    },
    pm = {
        title: 'Parameters Management',
        list: [" Create Unit of Measure", "Create Mode of Payment", "Credit Terms", "Expense"]
    },
    cm = {
        title: 'Customers Management',
        list: ["Membership", "Member/Customer", "Vouchers", "Discounts"]
    },
    ss = {
        title: 'System Setting',
        list: ["User Access ", "Backup/Restore Database", " Stock warehouse", "System Config", " Receipt Config", "Archive"]
    }
Crtf = {
    title: 'Cart',
    list: ["product Navigation", " transaction computation", " credit, cash drops, cash count and close counter", " secondary monitor display (for customer)", " database"],
},
    Of = {
        title: 'Other Feaures',
        list: [" Notifications", " Open Drawer", " Reprint Receipt", " Import and export CSV", "Sending Reports to Email", "Print Report via PDF"]
    }

function createList(title, liList, cont) {
    let cosTit = document.createElement('h3')
    cosTit.textContent = title
    let cosUl = document.createElement('ul')
    liList.forEach(item => {
        let cosLi = document.createElement('li')
        cosLi.textContent = item
        cosUl.appendChild(cosLi)
    });
    cont.appendChild(cosTit)
    cont.appendChild(cosUl)
}

createList(dashB.title, dashB.list, itemDashB)
createList(sm.title, sm.list, itemSM)
createList(srm.title, srm.list, itemSRM)
createList(im.title, im.list, itemIM)
createList(pm.title, pm.list, itemPM)
createList(cm.title, cm.list, itemCM)
createList(ss.title, ss.list, itemSS)
createList(Crtf.title, Crtf.list, itemCrt)
createList(Of.title, Of.list, itemOf)

//products
const productList = document.querySelectorAll(".product")
const productListMobile = document.querySelectorAll(".productm")
const modalProducts = document.querySelector(".products-modal")
const modalContent = document.querySelector(".modal-content")
const closeModalProducts = document.querySelector(".close-modal")
const modalProductsText = document.querySelector(".modal-header h3")

//FOR MOBILE
for (let productItemsMobile of productListMobile) {
    productItemsMobile.addEventListener("click", function () {
        if (this == productListMobile[0]) {
            avr()
        }
        if (this == productListMobile[1]) {
            barcodescanner()
        }
        if (this == productListMobile[2]) {
            cashdrawer()
        }
        if (this == productListMobile[3]) {
            hdmi()
        }
        if (this == productListMobile[4]) {
            kbmouse()
        }
        if (this == productListMobile[5]) {
            moneydetector()
        }
        if (this == productListMobile[6]) {
            monitor()
        }
        // if (this == productListMobile[7]){
        //     ram()
        // }
        if (this == productListMobile[7]) {
            speaker()
        }
        // if (this == productListMobile[9]){
        //     ssd()
        // }
        if (this == productListMobile[8]) {
            tablet()
        }
        if (this == productListMobile[9]) {
            cam()
        }
        if (this == productListMobile[10]) {
            thermalprinter()
        }
        if (this == productListMobile[11]) {
            unit()
        }
        if (this == productListMobile[12]) {
            wifidongle()
        }
    })
}

//FOR DESKTOP
for (let productItems of productList) {
    productItems.addEventListener("click", function () {
        if (this == productList[0]) {
            avr()
        }
        if (this == productList[1]) {
            barcodescanner()
        }
        if (this == productList[2]) {
            cashdrawer()
        }
        if (this == productList[3]) {
            hdmi()
        }
        if (this == productList[4]) {
            kbmouse()
        }
        if (this == productList[5]) {
            moneydetector()
        }
        if (this == productList[6]) {
            monitor()
        }
        // if (this == productList[7]){
        //     ram()
        // }
        if (this == productList[7]) {
            speaker()
        }
        // if (this == productList[9]){
        //     ssd()
        // }
        if (this == productList[8]) {
            tablet()
        }
        if (this == productList[9]) {
            cam()
        }
        if (this == productList[10]) {
            thermalprinter()
        }
        if (this == productList[11]) {
            unit()
        }
        if (this == productList[12]) {
            wifidongle()
        }
    })
}

closeModalProducts.addEventListener("click", function () {
    modalProducts.style.display = "none";
    modalContent.innerHTML = "";
})

const avr = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "AVR"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper bigImg'>
            <div class='swiper-slide'>
                <img src='./Per Item/AVR/1.jpg'/>
                <div class="img-loader">   
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/AVR/2.jpg' />
                <div class="img-loader">   
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper smallImg'>
            <div class='swiper-slide'>
                <img src='./Per Item/AVR/1.jpg'/>
                <div class="img-loader">   
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/AVR/2.jpg'/>
                <div class="img-loader">   
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    `;
    // swiper img loader
    const imgLoader = document.querySelectorAll(".swiper-slide img");
    const loaderImgBig = document.querySelectorAll(".bigImg .img-loader");
    const loaderImgSmall = document.querySelectorAll(".smallImg .img-loader");
    for (let productImages of imgLoader) {
        productImages.addEventListener("load", function () {
            const numElementsBig = document.querySelector(".bigImg").childElementCount;
            for (let i = 0; i < numElementsBig; i++) {
                if (this == imgLoader[i]) {
                    loaderImgBig[i].style.display = "none";
                }
            }
            const numElementsSmall = document.querySelector(".smallImg").childElementCount;
            console.log(numElementsSmall)
            for (let i = 0; i < numElementsSmall; i++) {
                if (this == imgLoader[i]) {
                    loaderImgSmall[i].style.display = "none";
                }
            }
        });
    }

    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const barcodescanner = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Barcode Scanner"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Barcode Scanner/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Barcode Scanner//2.jpg' />
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Barcode Scanner//1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Barcode Scanner//2.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const cashdrawer = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Cash Drawer"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Cash Drawer/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Cash Drawer/2.jpg' />
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Cash Drawer/3.jpg' />
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Cash Drawer/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Cash Drawer/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Cash Drawer/3.jpg' />
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const hdmi = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "HDMI"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/HDMI/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/HDMI/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/HDMI/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/HDMI/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/HDMI/5.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
        <div class='swiper-slide'>
            <img src='./Per Item/HDMI/1.jpg'/>
        </div>
        <div class='swiper-slide'>
            <img src='./Per Item/HDMI/2.jpg'/>
        </div>
        <div class='swiper-slide'>
            <img src='./Per Item/HDMI/3.jpg'/>
        </div>
        <div class='swiper-slide'>
            <img src='./Per Item/HDMI/4.jpg'/>
        </div>
        <div class='swiper-slide'>
            <img src='./Per Item/HDMI/5.jpg'/>
        </div>
            </div>
        </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const kbmouse = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Keyboard & Mouse"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/KB _ Mouse/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/KB _ Mouse/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/KB _ Mouse/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/KB _ Mouse/4.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/KB _ Mouse/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/KB _ Mouse/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/KB _ Mouse/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/KB _ Mouse/4.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const moneydetector = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Money Detector"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Money Detector/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Money Detector/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Money Detector/3.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Money Detector/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Money Detector/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Money Detector/3.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const monitor = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Monitor"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/6.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/7.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/8.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/9.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/10.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/11.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/12.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/13.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/6.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/7.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/8.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/9.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/10.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/11.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/12.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Monitor/13.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

// const ram = () =>{
//     modalProducts.style.display = "flex";
//     modalProductsText.innerHTML = "RAM"
//     modalContent.innerHTML = `
//     <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
//         <div class='swiper-wrapper'>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/RAM/1.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/RAM/2.jpg'/>
//             </div>
//         </div>
//         <div class='swiper-button-next'></div>
//         <div class='swiper-button-prev'></div>
//     </div>
//     <div thumbsSlider='' class='swiper mySwiper4'>
//         <div class='swiper-wrapper'>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/RAM/1.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/RAM/2.jpg'/>
//             </div>
//         </div>
//     </div>    
//     `;
//     var swiper = new Swiper(".mySwiper4", {
//         spaceBetween: 5,
//         slidesPerView: 4,
//         freeMode: true,
//         watchSlidesProgress: true,
//     });

//     var swiper = new Swiper(".mySwiper3", {
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//         swiper: swiper,
//         },
//     });
// }

const speaker = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Speaker"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Speaker/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Speaker/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Speaker/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Speaker/4.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Speaker/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Speaker/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Speaker/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Speaker/4.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

// const ssd = () =>{
//     modalProducts.style.display = "flex";
//     modalProductsText.innerHTML = "SSD"
//     modalContent.innerHTML = `
//     <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
//         <div class='swiper-wrapper'>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/1.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/2.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/3.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/4.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/5.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/6.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/7.jpg'/>
//             </div>
//         </div>
//         <div class='swiper-button-next'></div>
//         <div class='swiper-button-prev'></div>
//     </div>
//     <div thumbsSlider='' class='swiper mySwiper4'>
//         <div class='swiper-wrapper'>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/1.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/2.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/3.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/4.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/5.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/6.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='./Per Item/SSD/7.jpg'/>
//             </div>
//         </div>
//     </div>    
//     `;
//     var swiper = new Swiper(".mySwiper4", {
//         spaceBetween: 5,
//         slidesPerView: 4,
//         freeMode: true,
//         watchSlidesProgress: true,
//     });

//     var swiper = new Swiper(".mySwiper3", {
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//         swiper: swiper,
//         },
//     });
// }

const tablet = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Tablet"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/5.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Tablet only/5.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const cam = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Tenda CP3 Camera"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/tenda cp3 cam/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/tenda cp3 cam/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/tenda cp3 cam/3.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/tenda cp3 cam/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/tenda cp3 cam/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/tenda cp3 cam/3.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const thermalprinter = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Thermal Printer"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/6.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/7.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/6.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Thermal Printer/7.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const unit = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "System Unit"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/6.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Unit/6.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const wifidongle = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Wifi Dongle"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Wifi Dongle/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Wifi Dongle/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Wifi Dongle/3.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='./Per Item/Wifi Dongle/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Wifi Dongle/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='./Per Item/Wifi Dongle/3.jpg'/>
            </div>
        </div>
    </div>    
    `;
    var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const images = document.querySelectorAll('img')

images.forEach((image) => {
    image.setAttribute('draggable', false)
})

const ulChs = document.querySelectorAll('.windows-item ul')
let viewPortWidth = window.innerWidth,
    happenOnce = false, // happened to be small?
    itHas = false //window-flex is applied?

checkVP()
window.addEventListener('resize', checkVP)

function checkVP() {
    viewPortWidth = window.innerWidth;
    if (viewPortWidth <= 450) {
        // Apply mobile styles
        ulChs.forEach((ulsCh) => {
            ulsCh.style.display = "none";
        });
        happenOnce = true;
        asMediaQuery();
    }
    if (viewPortWidth > 450) {
        // Apply reset
        ulChs.forEach((ulsCh) => {
            ulsCh.style.display = "flex";
        });
        if (itHas) {
            // Remove mobile styles
            windowsGrid.classList.replace("windows-flex", "windows-grid");
            itHas = false;
            ulChs.forEach((ulsCh) => {
                ulsCh.style.height = "90%";
            });
            windowsItems.forEach((windowsItem) => {
                windowsItem.classList.remove("mobile-infopos");
                windowsItem.removeEventListener("click", clickHandler); // Remove the event listener
            });
        }
    }
}

function asMediaQuery() {
    if (happenOnce) {
        // Add mobile styles
        windowsGrid.classList.replace("windows-grid", "windows-flex");
        itHas = true;

        windowsItems.forEach((windowsItem) => {
            windowsItem.classList.add("mobile-infopos");
            windowsItem.addEventListener("click", clickHandler); // Add the event listener
        });
        applyMob = false;
    }
}

function clickHandler() {
    const ulCh = this.querySelector("ul");
    // ulCh.classList.add('elong')
    const iCh = this.querySelector("i");
    const isClicked = this.classList.contains("clicked");

    // Close all other items
    windowsItems.forEach((item) => {
        if (item !== this) {
            let ic = item.querySelector('i'),
                yes = ic.classList.contains('rotate-it')
            if (yes) {
                console.log(ic.classList)
                ic.classList.replace('rotate-it', 'normal-rotation')
            }
            item.classList.remove("clicked");
        }
    });

    if (isClicked) {
        // If this item is already clicked, close it
        this.classList.remove("clicked");
        ulCh.style.display = "none";
        iCh.classList.replace('rotate-it', 'normal-rotation')
    } else {
        // If this item is not clicked, open it
        this.classList.add("clicked");
        ulCh.style.display = "flex";
        iCh.classList.replace('normal-rotation', 'rotate-it')
    }
}
