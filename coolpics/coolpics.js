const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".hide");
    menu.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);

