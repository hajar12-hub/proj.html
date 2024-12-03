// Fonction pour obtenir un cookie par son nom
function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    // Boucle pour vérifier chaque cookie
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // définir le temps d'expiration
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Fonction pour activer/désactiver le mode sombre et stocker le choix dans un cookie
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    // Sauvegarder le mode dans un cookie
    const darkModeStatus = document.body.classList.contains("dark-mode") ? "enabled" : "disabled";
    setCookie("darkMode", darkModeStatus, 7); // cookie expirant après 7 jours
}

// Vérifier si le cookie 'darkMode' est défini et appliquer le mode en conséquence
document.addEventListener("DOMContentLoaded", () => {
    const darkMode = getCookie("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

// Ajouter l'événement sur le bouton de changement de mode
document.getElementById("toggleModeBtn").addEventListener("click", toggleDarkMode);

// Gestion de la barre latérale (menu caché)
const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");

// Fonction pour basculer la barre latérale
toggleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});


