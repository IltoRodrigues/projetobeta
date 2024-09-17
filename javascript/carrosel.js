// Variáveis para controle do carrossel
let slideIndex = 0; // Índice do slide atual
const slides = document.querySelectorAll('.slide'); // Seleciona todos os slides

// Função para mostrar o próximo slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Passa para o próximo slide, volta ao início se estiver no último
    updateSlides();
}

// Função para mostrar o slide anterior
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Volta ao slide anterior, ou para o último se estiver no primeiro
    updateSlides();
}

// Atualiza a posição dos slides
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`; // Move os slides para a esquerda ou direita
    });
}

// Inicia o carrossel
updateSlides();
