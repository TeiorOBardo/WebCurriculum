var sidebarSize = "300px";
const mobileSize = window.matchMedia("(max-width: 800px)").matches;
function ajustSize()
{
    if(mobileSize)
    {
        sidebarSize = "200px";
    }
}
function openSidebar()
{
    document.getElementById("sidebar").style.width = sidebarSize;
    document.getElementById("main").style.marginLeft = sidebarSize;
}

function closeSidebar()
{
    document.getElementById("sidebar").style.width = "0px";

    document.getElementById("main").style.marginLeft = "0px";
}

/* ======================================================
   CARROSSEL PREMIUM
====================================================== */

const track =
    document.querySelector(".carousel-track");

const cards =
    document.querySelectorAll(".carousel-card");

let currentIndex = 0;

/* ================= CARDS VISÍVEIS ================= */

function getVisibleCards()
{
    if(window.innerWidth <= 700)
    {
        return 1;
    }

    if(window.innerWidth <= 1100)
    {
        return 2;
    }

    return 3;
}

/* ================= GAP ================= */

function getGap()
{
    return 30;
}

/* ================= ATUALIZAR ================= */

function updateCarousel()
{
    const cardWidth =
        cards[0].offsetWidth;

    const moveDistance =
        cardWidth + getGap();

    track.style.transform =
        `translateX(-${currentIndex * moveDistance}px)`;
}

/* ================= PRÓXIMO ================= */

function nextSlide()
{
    const visibleCards =
        getVisibleCards();

    const maxIndex =
        cards.length - visibleCards;

    currentIndex++;

    if(currentIndex > maxIndex)
    {
        currentIndex = 0;
    }

    updateCarousel();
}

/* ================= ANTERIOR ================= */

function previousSlide()
{
    const visibleCards =
        getVisibleCards();

    const maxIndex =
        cards.length - visibleCards;

    currentIndex--;

    if(currentIndex < 0)
    {
        currentIndex = maxIndex;
    }

    updateCarousel();
}

/* ================= AUTO AJUSTE ================= */

window.addEventListener(
    "resize",
    updateCarousel
);

window.addEventListener(
    "load",
    updateCarousel
);

/* ================= POPUPs ================= */
/* =========================================== */

// Seleção dos elementos do Modal
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalTags = document.getElementById("modalTags");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");

// Seleciona todos os cards do carrossel
const carouselCards = document.querySelectorAll(".carousel-card");

// Adiciona o evento de clique em cada card
carouselCards.forEach(card => {
    card.addEventListener("click", () => {
        // Pega as informações de dentro do card clicado
        const title = card.querySelector(".carousel-overlay h2").textContent;
        const tags = card.querySelector(".carousel-overlay p").textContent;
        const description = card.getAttribute("data-desc");

        // Alimenta o modal com as informações capturadas
        modalTitle.textContent = title;
        modalTags.textContent = tags;
        modalDescription.textContent = description;

        // Abre o modal adicionando a classe CSS
        modal.classList.add("show");
    });
});

// Fecha o modal ao clicar no botão (X)
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Fecha o modal se o usuário clicar em qualquer lugar fora da caixinha branca
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});