document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    // Resaltar el icono del menú al hacer scroll
    window.addEventListener("scroll", function () {
        let fromTop = window.scrollY + 150; // Ajuste para compensar el menú fijo

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.querySelector("img").style.filter = "grayscale(0%)";
                link.querySelector("img").style.transform = "scale(1.2)";
            } else {
                link.querySelector("img").style.filter = "grayscale(100%)";
                link.querySelector("img").style.transform = "scale(1)";
            }
        });
    });
});
