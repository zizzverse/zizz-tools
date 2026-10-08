// ZIZZ Tools App

document.addEventListener("DOMContentLoaded", () => {

    // Search button
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", () => {
        alert("Search feature coming soon!");
    });


    // Tool buttons
    const toolCards = document.querySelectorAll(".tool-card");

    toolCards.forEach((card) => {

        card.addEventListener("click", () => {

            const toolName = card.querySelector("strong").textContent;

            alert(toolName + " will open soon!");

        });

    });


    // AI buttons
    const aiCards = document.querySelectorAll(".ai-card");

    aiCards.forEach((card) => {

        card.addEventListener("click", () => {

            const toolName = card.querySelector("strong").textContent;

            alert(toolName + " will open soon!");

        });

    });


    // Bottom navigation
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {

        item.addEventListener("click", () => {

            navItems.forEach((nav) => {
                nav.classList.remove("active");
            });

            item.classList.add("active");

        });

    });

});
