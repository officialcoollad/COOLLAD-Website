/*=========================================
COOLLAD PREMIUM PRODUCTS
Tabs Animation
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".product-tabs button");

    const cards = document.querySelectorAll(".product-card");

    tabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            // Remove active class

            tabs.forEach(btn => btn.classList.remove("active"));

            tab.classList.add("active");

            // Fade Animation

            cards.forEach(card => {

                card.style.opacity = "0";

                card.style.transform = "translateY(25px)";

            });

            setTimeout(() => {

                cards.forEach(card => {

                    card.style.opacity = "1";

                    card.style.transform = "translateY(0)";

                });

            },250);

        });

    });

});