// =================================
// 1. ANIMATION DES SECTIONS
// =================================
const sections =
document.querySelectorAll("section");
const observer = new
IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});
sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});
// =================================
// 2. EFFET SUR LES CARTES
// =================================
const cards = document.querySelectorAll(
    ".skill-card, .project-card"
);
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-7px)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});
// =================================
// 3. ANNEE AUTOMATIQUE DU FOOTER
// =================================
const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}
console.log("Portfolio de Kévin chargé avec succès !");