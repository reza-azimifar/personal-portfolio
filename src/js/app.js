const navbar = document.querySelector("#nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
navBtn.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();