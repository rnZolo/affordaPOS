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

var itemHolder = document.querySelector(".all-clients-child");
        var CategoryCl = document.querySelector(".clients-category");
        
        // harware-items
        document.querySelector(".hardware").addEventListener("click", Hardware);
        function Hardware(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "hardware");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Hardware Store";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Hardware/hardware (()).png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Hardware/hardware().png'>";
        
        }

        // grocery-items
        document.querySelector(".grocery").addEventListener("click", Grocery);
        function Grocery(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "grocery");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Grocery Store";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Grocery/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Grocery/2.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Grocery/3.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Grocery/4.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Grocery/5.png'>";
        }

        // convinience-items
        document.querySelector(".convinience").addEventListener("click", Convinience);
        function Convinience(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "convinience");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Convinience Store";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Convinience Store/1.png'>";
        }

        // minig-items
        document.querySelector(".minig").addEventListener("click", MiniG);
        function MiniG(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "minig");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Mini Grocery";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/2.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/3.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/4.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/5.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/6.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/7.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/8.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/9.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniGrocery/10.png'>";
        }

        // minim-items
        document.querySelector(".minim").addEventListener("click", MiniM);
        function MiniM(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "minim");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Mini Mart";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/2.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/3.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/4.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/5.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/6.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/7.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/8.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/9.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/10.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/11.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/12.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/13.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/14.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/15.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/16.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/17.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/18.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/19.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/20.png'>"
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/21.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/22.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/23.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/24.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/25.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/26.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/MiniMart/27.png'>";
        }

        // pharmacy-items
        document.querySelector(".pharmacy").addEventListener("click", Pharmacy);
        function Pharmacy(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "pharmacy");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Pharmacy";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/2.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/3.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/4.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/5.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/6.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/7.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/8.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/9.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/10.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/11.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/12.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/13.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/14.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/15.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/16.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/17.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/18.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/19.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Pharmacy/20.png'>";
        }

        // Phone-items
        document.querySelector(".phone").addEventListener("click", Phone);
        function Phone(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "phone");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Phone Accessories";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Phone Accessories/1.png'>";
        }

        // Restaurant-items
        document.querySelector(".restaurant").addEventListener("click", Restaurant);
        function Restaurant(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "restaurant");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Restaurant";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Restaurant/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Restaurant/2.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Restaurant/3.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Restaurant/4.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Restaurant/5.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Restaurant/6.png'>";
        }

        
        // Retail-items
        document.querySelector(".retail").addEventListener("click", Retail);
        function Retail(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "retail");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Retail Store";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/RetailStore/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/RetailStore/2.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/RetailStore/3.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/RetailStore/4.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/RetailStore/5.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/RetailStore/6.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/RetailStore/7.png'>";
        }
        
        //SariSari-items
        document.querySelector(".sari").addEventListener("click", Sari);
        function Sari(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "sari");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Sari-Sari Store";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Sari-sari store/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Sari-sari store/2.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/Sari-sari store/3.png'>";
        }

        // School-items
        document.querySelector(".school").addEventListener("click", School);
        function School(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "school");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "School Supplies Store";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/SchoolSupplies/1.png'>";
        }
        
        // Skin-items
        document.querySelector(".skin").addEventListener("click", Skin);
        function Skin(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "skin");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Skin Care Clinic";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/SkinCareClinic/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/SkinCareClinic/2.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/SkinCareClinic/3.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/SkinCareClinic/4.png'>";
        }

        // Vet-items
        document.querySelector(".vet").addEventListener("click", Vet);
        function Vet(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "vet");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Vet Clinic";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/VetClinic/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/VetClinic/2.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/VetClinic/3.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/VetClinic/4.png'>";
        }

        // Pasalubong-items
        document.querySelector(".pasalubong").addEventListener("click", Pasalubong);
        function Pasalubong(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "pasalubong");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Pasalubong Shop";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/PasalubongShop/1.png'>";
        }

        // Dishwashing-items
        document.querySelector(".dishwashing").addEventListener("click", Dishwashing);
        function Dishwashing(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "dishwashing");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Dishwashing Shop";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/DishwashingProducts/1.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/DishwashingProducts/2.png'>";
        }

        // other-items
        document.querySelector(".others").addEventListener("click", Other);
        function Other(){
                $(document).ready(function () {
                $(".all-clients-item").slice(0, 12).show();
                localStorage.setItem("content", "other");
                document.querySelector("#loadMore").innerHTML =
                "<span>Load more</span>" +
                "<svg width='34' height='34' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                "<circle cx='37' cy='37' r='35.5' stroke='black' stroke-width='3'></circle>" +
                "<path d='M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z' fill='black'></path>" +
                "</svg>";
                $("#loadMore").on("click", function (e) {
                    e.preventDefault();
                    $(".all-clients-item:hidden").slice(0, 12).slideDown();
                    if ($(".all-clients-item:hidden").length == 0) {
                        $("#loadMore").text("No Content").addClass("noContent");
                    }
                });
            })
            CategoryCl.innerHTML = "Others";
            itemHolder.innerHTML = 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/1.jpg'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/2.jpg'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/3.jpg'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/4.jpg'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/5.jpg'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/6.jpg'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/8.jpg'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/11.jpg'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/12.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/13.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/14.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/15.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/17.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/18.png'>" + 
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/20.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/21.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/22.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/23.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/24.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/25.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/26.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/27.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/29.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/30.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/31.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/33.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/35.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/36.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/37.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/38.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/39.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/40.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/41.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/42.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/43.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/44.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/46.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/47.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/49.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/frame/50.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/nationwide/51.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/nationwide/52.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/nationwide/53.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/nationwide/54.png'>" +
            "<img data-aos='fade-up' data-aos-duration='1000' class='all-clients-item modal-target' src = '../clients/nationwide/55.png'>";
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

            // drop-down features
            document.querySelector("#f").addEventListener("click", Features);
            var f = document.querySelector(".drop-down-features");// dropdown in large
            var e = document.querySelector(".drop-down-features-mobile"); //dropdown in small
            // drop-down clients
            document.querySelector("#cl").addEventListener("click", Clients);
            var cl = document.querySelector(".drop-down-clients");
            var clm = document.querySelector(".drop-down-clients-mobile");

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

            window.addEventListener("resize", Resize)
            function Resize()
            {
                cl.style.display = "none";
                f.style.display = "none";
                e.style.display = "none";
                clm.style.display = "none";
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
/////////////////////////////////////////////////////////////////////////MMOBILE NAVIGATOR////////////////////////////////////////////////////////////////////////////////////
        // harware-items
        document.querySelector(".hardwarem").addEventListener("click", Hardwarem);
        function Hardwarem(){   
            Hardware();
        }

        // convinience-items
        document.querySelector(".grocerym").addEventListener("click", Grocerym);
        function Grocerym(){
            Grocery();
        }

        // grocery-items
        document.querySelector(".conviniencem").addEventListener("click", Conviniencem);
        function Conviniencem(){
            Convinience();
        }

        // minig-items
        document.querySelector(".minigm").addEventListener("click", MiniGm);
        function MiniGm(){
            MiniG();
        }

        // minim-items
        document.querySelector(".minimm").addEventListener("click", MiniMm);
        function MiniMm(){
            MiniM();
        }

        // pharmacy-items
        document.querySelector(".pharmacym").addEventListener("click", Pharmacym);
        function Pharmacym(){    
            Pharmacy();
        }

        // Phone-items
        document.querySelector(".phonem").addEventListener("click", Phonem);
        function Phonem(){
            Phone();
        }

        // Restaurant-items
        document.querySelector(".restaurantm").addEventListener("click", Restaurantm);
        function Restaurantm(){
            Restaurant();
        }

        
        // Retail-items
        document.querySelector(".retailm").addEventListener("click", Retailm);
        function Retailm(){
            Retail();
        }
        
        //SariSari-items
        document.querySelector(".sarim").addEventListener("click", Sarim);
        function Sarim(){
            Sari();
        }

        // School-items
        document.querySelector(".schoolm").addEventListener("click", Schoolm);
        function Schoolm(){
            School();
        }
        
        // Skin-items
        document.querySelector(".skinm").addEventListener("click", Skinm);
        function Skinm(){
            Skin();
        }

        // Vet-items
        document.querySelector(".vetm").addEventListener("click", Vetm);
        function Vetm(){
            Vet();
        }

        // Pasalubong-items
        document.querySelector(".pasalubongm").addEventListener("click", Pasalubongm);
        function Pasalubongm(){
            Pasalubong();
        }

        // Dishwashing-items
        document.querySelector(".dishwashingm").addEventListener("click", Dishwashingm);
        function Dishwashingm(){
            Dishwashing();
        }

        // other-items
        document.querySelector(".othersm").addEventListener("click", Otherm);
        function Otherm(){
            Other();
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        //loader
        document.onreadystatechange = function () {
        const state = document.readyState
            var content = localStorage.getItem("content");
            if (content == "dishwashing")
            {
                Dishwashing();
            }

            if (content == "convinience")
            {
                Convinience();
            }
            if (content == "hardware")
            {
                Hardware();
            }

            if (content == "minig")
            {
                MiniG();
            }
            if (content == "minim")
            {
                MiniM();
            }

            if (content == "pharmacy")
            {
                Pharmacy();
            }
            if (content == "phone")
            {
                Phone();
            }

            if (content == "restaurant")
            {
                Restaurant();
            }
            if (content == "retail")
            {
                Retail();
            }

            if (content == "sari")
            {
                Sari();
            }
            if (content == "school")
            {
                School();
            }

            if (content == "skin")
            {
                Skin();
            }
            if (content == "vet")
            {
                Vet();
            }

            if (content == "pasalubong")
            {
                Pasalubong();
            }
            if (content == "other")
            {
                Other();
            }
            if (content == "grocery")
            {
                Grocery();
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