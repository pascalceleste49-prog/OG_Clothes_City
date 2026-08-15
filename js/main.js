/* =========================================================
   CLOTHES' CITY
   MAIN.JS

   - Dark mode
   - Validation formulaire
   - Envoi EmailJS
========================================================= */


/* =========================================================
   1. DARK MODE
========================================================= */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const icon = themeToggle.querySelector("i");

    // Récupérer le thème sauvegardé
    const savedTheme = localStorage.getItem("theme");

    // Appliquer le thème sauvegardé
    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (icon) {
            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");
        }
    }


    // Changer le thème
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const darkMode =
            document.body.classList.contains("dark-mode");


        if (darkMode) {

            localStorage.setItem("theme", "dark");

            if (icon) {
                icon.classList.remove("bi-moon-fill");
                icon.classList.add("bi-sun-fill");
            }

            themeToggle.setAttribute(
                "aria-label",
                "Activer le mode clair"
            );

        } else {

            localStorage.setItem("theme", "light");

            if (icon) {
                icon.classList.remove("bi-sun-fill");
                icon.classList.add("bi-moon-fill");
            }

            themeToggle.setAttribute(
                "aria-label",
                "Activer le mode sombre"
            );
        }

    });

}