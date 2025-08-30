const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// Alterna entre os temas dark e light
function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
    }

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

// Controla o comportamento do acordeão
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        if (accordionActive) {
            accordionItem.classList.remove("active");
        } else {
            accordionItem.classList.add("active");
        }
    });
});

// Adiciona a classe 'active' ao link do menu clicado
menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(link => link.classList.remove("active"));
        item.classList.add("active");
    });
});