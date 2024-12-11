document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const opcoes = document.querySelector(".opcoes");

    menuToggle.addEventListener("click", () => {
        opcoes.classList.toggle("active");
    });
});