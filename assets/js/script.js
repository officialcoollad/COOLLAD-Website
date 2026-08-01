const menuBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("menu-overlay");

if (menuBtn && navbar && overlay) {

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("active");
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("menu-open");

    });

    overlay.addEventListener("click", () => {

        menuBtn.classList.remove("active");
        navbar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

}