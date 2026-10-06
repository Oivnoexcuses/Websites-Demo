
/* =========================================================
   RANDHIR BALLOON DECORATION
   PROFESSIONAL WEBSITE JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= NAVBAR SCROLL ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navigationLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + sectionId) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);


/* ================= REVEAL ANIMATION ================= */

const animatedElements = document.querySelectorAll(
    ".service-card, .review-card, .contact-card, .gallery-item, .about-content, .about-image"
);

animatedElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

animatedElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= BOOKING FORM ================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const occasion = document.getElementById("occasion").value;

    const message = document.getElementById("message").value.trim();


    if (!name || !phone || !occasion) {

        alert("Please fill in your name, phone number and occasion.");

        return;

    }


    /* Basic phone validation */

    const phonePattern = /^[0-9+\-\s]{10,15}$/;

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid phone number.");

        return;

    }


    const whatsappMessage =
        `Hello Randhir Balloon Decoration Chandigarh!

I want to book a decoration.

Name: ${name}
Phone: ${phone}
Occasion: ${occasion}
Requirement: ${message || "Not specified"}

Please share available packages and pricing.`;

    
    const whatsappURL =
        "https://wa.me/917087969090?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(whatsappURL, "_blank");

});


/* ================= DYNAMIC YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const navbarHeight = navbar.offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* ================= PHONE INPUT ================= */

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", () => {

    phoneInput.value = phoneInput.value.replace(
        /[^0-9+\-\s]/g,
        ""
    );

});


/* ================= PAGE LOADED ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
