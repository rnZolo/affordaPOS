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

//close mobile nav after selecting
document.querySelector(".drop-down-clients-mobile").addEventListener("click", closeNav)
function closeNav() {
    location.href = './allclients.html';
}

var itemHolder = document.querySelector(".all-clients-child");
var CategoryCl = document.querySelector(".clients-category");

// harware-items
document.querySelector(".hardware").addEventListener("click", Hardware);
function Hardware() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "hardware");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Hardware Store";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/Hardware/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Hardware/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Hardware/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Hardware/4.jpg'>";

}

// grocery-items
document.querySelector(".grocery").addEventListener("click", Grocery);
function Grocery() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "grocery");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Grocery Store";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/4.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/5.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/6.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/7.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/8.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/9.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/10.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/11.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/12.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/13.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/14.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/15.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/16.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/17.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/18.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/19.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/20.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/21.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/22.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/23.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/24.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/25.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/26.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/27.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/28.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/29.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/30.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/31.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/32.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/33.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/34.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/35.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/36.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/37.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/38.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/39.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/40.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/41.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/42.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/43.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/44.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/45.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/46.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Grocery/47.jpg'>";
}

// convinience-items
document.querySelector(".convinience").addEventListener("click", Convinience);
function Convinience() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "convinience");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Convinience Store";
    itemHolder.innerHTML =
        "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Convinience Store/1.jpg'>";
}

// pharmacy-items
document.querySelector(".pharmacy").addEventListener("click", Pharmacy);
function Pharmacy() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "pharmacy");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Pharmacy";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/4.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/5.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/6.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/7.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/8.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/9.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/10.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/11.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/12.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/13.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/14.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/15.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/16.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/17.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/18.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/19.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/20.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/21.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/22.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/23.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/24.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/25.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/26.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/27.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/28.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Pharmacy/29.jpg'>";
}

// Phone-items
document.querySelector(".phone").addEventListener("click", Phone);
function Phone() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "phone");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Phone Accessories";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/Phone Accessories/1.jpg'>";
}

// Restaurant-items
document.querySelector(".restaurant").addEventListener("click", Restaurant);
function Restaurant() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "restaurant");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Restaurant";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/4.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/5.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/6.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/7.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/8.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/9.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/10.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/11.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/12.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/13.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/14.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/15.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/16.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/17.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Restaurant/18.jpg'>";
}


// Retail-items
document.querySelector(".retail").addEventListener("click", Retail);
function Retail() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "retail");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Retail Store";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/RetailStore/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/RetailStore/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/RetailStore/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/RetailStore/4.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/RetailStore/5.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/RetailStore/6.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/RetailStore/7.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/RetailStore/8.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/SchoolSupplies/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/SchoolSupplies/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/SchoolSupplies/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/DishwashingProducts/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/DishwashingProducts/2.jpg'>";
}

//SariSari-items
document.querySelector(".sari").addEventListener("click", Sari);
function Sari() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "sari");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Sari-Sari Store";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/Sari-sari store/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Sari-sari store/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Sari-sari store/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/Sari-sari store/4.jpg'>";
}

// Skin-items
document.querySelector(".skin").addEventListener("click", Skin);
function Skin() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "skin");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Skin Care Clinic";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/SkinCareClinic/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/SkinCareClinic/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/SkinCareClinic/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/SkinCareClinic/4.jpg'>";
}

// Vet-items
document.querySelector(".vet").addEventListener("click", Vet);
function Vet() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "vet");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Vet Clinic";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/VetClinic/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/VetClinic/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/VetClinic/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/VetClinic/4.jpg'>";
}

// Pasalubong-items
document.querySelector(".pasalubong").addEventListener("click", Pasalubong);
function Pasalubong() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "pasalubong");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Pasalubong Shop";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/PasalubongShop/1.jpg'>";
}

// other-items
document.querySelector(".others").addEventListener("click", Other);
function Other() {
    $(document).ready(function () {
        $(".all-clients-item").slice(0, 12).show();
        localStorage.setItem("content", "other");
        document.querySelector("#loadMore").innerHTML =
            "<span>Load more</span>" +
            "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
            "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
            "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
            "</svg>";
    })
    CategoryCl.innerHTML = "Others";
    itemHolder.innerHTML =
        "<img class='all-clients-item modal-target' src = '../clients/others/1.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/2.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/3.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/4.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/5.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/6.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/8.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/11.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/12.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/13.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/14.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/15.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/16.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/17.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/18.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/19.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/20.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/21.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/22.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/23.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/24.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/25.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/26.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/27.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/29.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/30.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/31.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/33.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/35.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/36.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/37.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/38.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/39.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/40.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/41.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/42.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/43.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/44.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/46.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/47.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/48.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/49.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/50.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/52.jpg'>" +
        "<img class='all-clients-item modal-target' src = '../clients/others/53.jpg'>";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//loadmore
$(document).ready(function () {
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".all-clients-item:hidden").slice(0, 12).slideDown();
        if ($(".all-clients-item:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });
})


// dropdown products
const productsbtn = document.querySelector("#pro")
productsbtn.addEventListener("click", productsDropdown)
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
// drop-down clients
document.querySelector("#cl").addEventListener("click", Clients);
var cl = document.querySelector(".drop-down-clients");
var clm = document.querySelector(".drop-down-clients-mobile");

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
            productsdrop.style.display = "none";
        }
        else //if large-ftdropdown is visible
        {
            f.style.display = "none"; // set large-Ftdropdown to not visible
        }
    }
}
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
            productsdrop.style.display = "none";
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
    productsdropmobile.style.display = "none";
}

window.addEventListener("resize", Resize)
function Resize() {
    cl.style.display = "none";
    f.style.display = "none";
    e.style.display = "none";
    clm.style.display = "none";
    productsdrop.style.display = "none";
    productsdropmobile.style.display = "none";
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//loader
document.onreadystatechange = function () {
    const state = document.readyState
    var content = localStorage.getItem("content");

    if (content == "convinience") {
        Convinience();
    }
    if (content == "hardware") {
        Hardware();
    }

    if (content == "pharmacy") {
        Pharmacy();
    }
    if (content == "phone") {
        Phone();
    }

    if (content == "restaurant") {
        Restaurant();
    }
    if (content == "retail") {
        Retail();
    }

    if (content == "sari") {
        Sari();
    }

    if (content == "skin") {
        Skin();
    }
    if (content == "vet") {
        Vet();
    }

    if (content == "pasalubong") {
        Pasalubong();
    }
    if (content == "other") {
        Other();
    }
    if (content == "grocery") {
        Grocery();
    }

    if (content == "") {
        Other();
    }

    if (state == 'complete') {
        setTimeout(function () {
            jQuery(document).ready(function () {
                jQuery('#loader').fadeOut(500);
                jQuery("#mybody").fadeIn(500);
            });
            document.getElementById("mybody").style.overflowY = "scroll";
        }, 1000);
    }
    else {
        document.getElementById("mybody").style.overflowY = "hidden";
    }
}
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

//products
const productList = document.querySelectorAll(".product")
const productListMobile = document.querySelectorAll(".productm")
const modalProducts = document.querySelector(".products-modal")
const modalContent = document.querySelector(".modal-content")
const closeModalProducts = document.querySelector(".close-modal")
const modalProductsText = document.querySelector(".modal-header h3")

//FOR MOBILE
for (let productItemsMobile of productListMobile)
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

//FOR DESKTOP
for (let productItems of productList)
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

closeModalProducts.addEventListener("click", function () {
    modalProducts.style.display = "none";
    modalContent.innerHTML = "";
})

const avr = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "AVR"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/AVR/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/AVR/2.jpg' />
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/AVR/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/AVR/2.jpg'/>
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

const barcodescanner = () => {
    modalProducts.style.display = "flex";
    modalProductsText.innerHTML = "Barcode Scanner"
    modalContent.innerHTML = `
    <div style='swiper-navigation-color: #fff; --swiper-pagination-color: #fff' class='swiper3 swiper mySwiper3'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Barcode Scanner/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Barcode Scanner//2.jpg' />
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Barcode Scanner//1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Barcode Scanner//2.jpg'/>
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
                <img src='../Per Item/Cash Drawer/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Cash Drawer/2.jpg' />
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Cash Drawer/3.jpg' />
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Cash Drawer/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Cash Drawer/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Cash Drawer/3.jpg' />
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
                <img src='../Per Item/HDMI/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/HDMI/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/HDMI/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/HDMI/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/HDMI/5.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
        <div class='swiper-slide'>
            <img src='../Per Item/HDMI/1.jpg'/>
        </div>
        <div class='swiper-slide'>
            <img src='../Per Item/HDMI/2.jpg'/>
        </div>
        <div class='swiper-slide'>
            <img src='../Per Item/HDMI/3.jpg'/>
        </div>
        <div class='swiper-slide'>
            <img src='../Per Item/HDMI/4.jpg'/>
        </div>
        <div class='swiper-slide'>
            <img src='../Per Item/HDMI/5.jpg'/>
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
                <img src='../Per Item/KB _ Mouse/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/KB _ Mouse/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/KB _ Mouse/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/KB _ Mouse/4.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/KB _ Mouse/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/KB _ Mouse/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/KB _ Mouse/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/KB _ Mouse/4.jpg'/>
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
                <img src='../Per Item/Money Detector/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Money Detector/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Money Detector/3.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Money Detector/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Money Detector/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Money Detector/3.jpg'/>
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
                <img src='../Per Item/Monitor/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/6.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/7.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/8.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/9.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/10.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/11.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/12.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/13.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/6.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/7.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/8.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/9.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/10.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/11.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/12.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Monitor/13.jpg'/>
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
//                 <img src='../Per Item/RAM/1.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/RAM/2.jpg'/>
//             </div>
//         </div>
//         <div class='swiper-button-next'></div>
//         <div class='swiper-button-prev'></div>
//     </div>
//     <div thumbsSlider='' class='swiper mySwiper4'>
//         <div class='swiper-wrapper'>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/RAM/1.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/RAM/2.jpg'/>
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
                <img src='../Per Item/Speaker/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Speaker/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Speaker/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Speaker/4.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Speaker/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Speaker/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Speaker/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Speaker/4.jpg'/>
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
//                 <img src='../Per Item/SSD/1.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/2.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/3.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/4.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/5.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/6.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/7.jpg'/>
//             </div>
//         </div>
//         <div class='swiper-button-next'></div>
//         <div class='swiper-button-prev'></div>
//     </div>
//     <div thumbsSlider='' class='swiper mySwiper4'>
//         <div class='swiper-wrapper'>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/1.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/2.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/3.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/4.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/5.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/6.jpg'/>
//             </div>
//             <div class='swiper-slide'>
//                 <img src='../Per Item/SSD/7.jpg'/>
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
                <img src='../Per Item/Tablet only/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Tablet only/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Tablet only/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Tablet only/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Tablet only/5.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Tablet only/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Tablet only/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Tablet only/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Tablet only/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Tablet only/5.jpg'/>
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
                <img src='../Per Item/tenda cp3 cam/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/tenda cp3 cam/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/tenda cp3 cam/3.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/tenda cp3 cam/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/tenda cp3 cam/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/tenda cp3 cam/3.jpg'/>
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
                <img src='../Per Item/Thermal Printer/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/6.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/7.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/6.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Thermal Printer/7.jpg'/>
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
                <img src='../Per Item/Unit/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/6.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/3.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/4.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/5.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Unit/6.jpg'/>
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
                <img src='../Per Item/Wifi Dongle/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Wifi Dongle/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Wifi Dongle/3.jpg'/>
            </div>
        </div>
        <div class='swiper-button-next'></div>
        <div class='swiper-button-prev'></div>
    </div>
    <div thumbsSlider='' class='swiper mySwiper4'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide'>
                <img src='../Per Item/Wifi Dongle/1.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Wifi Dongle/2.jpg'/>
            </div>
            <div class='swiper-slide'>
                <img src='../Per Item/Wifi Dongle/3.jpg'/>
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