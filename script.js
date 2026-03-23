// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    hamburger.classList.toggle('active'); // Add/remove active class for X shape
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('show-menu');
        hamburger.classList.remove('active'); // Remove active class when closing menu
    }
});

var swiper = new Swiper('.productSwiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 2,
    grabCursor: true,


    pagination: {
        el: '.product-pagination',
    },
    navigation: {
        nextEl: '.product-next',
        prevEl: '.product-prev',
    },
    breakpoints: {

        // Mobile (0px se start)
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 1,
        },

        // Small Mobile / Large Phone
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 1,
        },

        // Tablet
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },

        // Small Laptop
        1024: {
            slidesPerView: 3,
            spaceBetween: 25,
            slidesPerGroup: 1,
        },

        // Desktop
        1200: {
            slidesPerView: 4,
            spaceBetween: 25,
            slidesPerGroup: 2,
        }

    }
});



let catogryProduct = document.querySelectorAll(".catogary-button-card");
let catogryBtn = document.querySelectorAll(".catogary-btn");
// Default active button
catogryBtn[0].classList.add("active");

// Default MEN products show karne ke liye
catogryBtn[0].click();
catogryBtn[0].addEventListener("click", function () {
    // Sab buttons se active hatao
    catogryBtn[0].classList.remove("active");
    catogryBtn[1].classList.remove("active");
    catogryBtn[2].classList.remove("active");

    // MEN ko active karo
    catogryBtn[0].classList.add("active");
    catogryProduct[0].querySelector("img").src = "https://freakins.com/cdn/shop/files/Freakins15NOV1532.jpg?v=1749906236";
    catogryProduct[0].querySelector("h4").textContent = "Men’s Urban Baggy Fit Jeans";
    catogryProduct[0].querySelector("span").textContent = "Men Jeans";

    catogryProduct[1].querySelector("img").src = "https://www.jandjp.in/cdn/shop/files/6_68a71b15-2ccf-4699-9799-fd87f60ec437.jpg?v=1769249990";
    catogryProduct[1].querySelector("h4").textContent = "Men's Classic Fit Polo T-Shirt";
    catogryProduct[1].querySelector("span").textContent = "Men Tshirt";

    catogryProduct[2].querySelector("img").src = "https://nightcityclothing.com/cdn/shop/products/A80I4072.jpg?v=1654649288";
    catogryProduct[2].querySelector("h4").textContent = "Men’s Relaxed Fit Long Coat";
    catogryProduct[2].querySelector("span").textContent = "Men Coats";

    catogryProduct[3].querySelector("img").src = "https://veirdo.in/cdn/shop/files/Artboard90_1.jpg?v=1762951456";
    catogryProduct[3].querySelector("h4").textContent = "Men’s Relaxed Fit Hoodie";
    catogryProduct[3].querySelector("span").textContent = "Men Hoodie";
});

catogryBtn[1].addEventListener("click", function () {
    catogryBtn[0].classList.remove("active");
    catogryBtn[1].classList.remove("active");
    catogryBtn[2].classList.remove("active");

    catogryBtn[1].classList.add("active");
    catogryProduct[0].querySelector("img").src = "https://www.bonkerscorner.com/cdn/shop/files/multi-colour-oversized-shirt-xs-bonkerscorner-store-33708526698596.jpg?v=1728983345";
    catogryProduct[0].querySelector("h4").textContent = "Women’s Oversized Casual Shirt";
    catogryProduct[0].querySelector("span").textContent = "Women Shirt";

    catogryProduct[1].querySelector("img").src = "https://i0.wp.com/thecatwalkmagazine.com/wp-content/uploads/2023/11/oversized-coat-outfit-4.jpg";
    catogryProduct[1].querySelector("h4").textContent = "Women’s Relaxed Fit Long Coat";
    catogryProduct[1].querySelector("span").textContent = "Women Coat";

    catogryProduct[2].querySelector("img").src = "https://panchakanya.co.in/cdn/shop/files/Untitleddesign_12.jpg?v=1731944548";
    catogryProduct[2].querySelector("h4").textContent = "Women’s Elegant Midi Skirt";
    catogryProduct[2].querySelector("span").textContent = "Women Skirt";

    catogryProduct[3].querySelector("img").src = "https://houseoffett.com/cdn/shop/files/5_0965c1ff-b837-49e4-9f31-9754058e7a61_1800x1800.jpg?v=1749817911";
    catogryProduct[3].querySelector("h4").textContent = "Women’s Elegant Gown";
    catogryProduct[3].querySelector("span").textContent = "Women Gown";
});

catogryBtn[2].addEventListener("click", function () {
    catogryBtn[0].classList.remove("active");
    catogryBtn[1].classList.remove("active");
    catogryBtn[2].classList.remove("active");

    catogryBtn[2].classList.add("active");
    catogryProduct[0].querySelector("img").src = "https://www.richlook.in/cdn/shop/files/img_182.jpg?v=1765875467";
    catogryProduct[0].querySelector("h4").textContent = "Men’s Relaxed Fit Sweatshirt";
    catogryProduct[0].querySelector("span").textContent = "Men Sweatshirt";

    catogryProduct[1].querySelector("img").src = "https://nightcityclothing.com/cdn/shop/products/A80I4072.jpg?v=1654649288";
    catogryProduct[1].querySelector("h4").textContent = "Men’s Relaxed Fit Long Coat";
    catogryProduct[1].querySelector("span").textContent = "Means Coat";

    catogryProduct[2].querySelector("img").src = "https://images-cdn.ubuy.co.in/689cd42e2ac438cf480c4b03-women-2025-sexy-summer-bodycon-ruched.jpg";
    catogryProduct[2].querySelector("h4").textContent = "Women’s Daring Glam Party Dress";
    catogryProduct[2].querySelector("span").textContent = "Women Revealing";

    catogryProduct[3].querySelector("img").src = "https://m.media-amazon.com/images/I/41-2qMvorML._AC_UY1100_.jpg";
    catogryProduct[3].querySelector("h4").textContent = "Women’s Relaxed Fit Oversized Hoodie";
    catogryProduct[3].querySelector("span").textContent = "Women Hoodie";
});

var swiper = new Swiper('.testi', {
    // Default (Desktop/Large screens)
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.testi-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.testi-next',
        prevEl: '.testi-prev',
    },
    // Responsive Breakpoints
    breakpoints: {
        // When window width is >= 320px (Mobile)
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1
        },
        // When window width is >= 768px (Tablets)
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2
        }
    }
});
