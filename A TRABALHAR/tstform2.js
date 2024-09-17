// Obter referências aos elementos do DOM
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');

// Array para armazenar as avaliações
let reviews = [];

// Função para exibir as avaliações
function displayReviews() {
    // Limpar o container
    reviewsContainer.innerHTML = '';

    // Percorrer o array de avaliações e criar os elementos
    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        const namePara = document.createElement('p');
        namePara.classList.add('review-name');
        namePara.textContent = review.name;

        const ratingPara = document.createElement('p');
        ratingPara.classList.add('review-rating');
        ratingPara.textContent = 'Nota: ' + '⭐'.repeat(review.rating);

        const commentPara = document.createElement('p');
        commentPara.classList.add('review-comment');
        commentPara.textContent = review.comment;

        reviewDiv.appendChild(namePara);
        reviewDiv.appendChild(ratingPara);
        reviewDiv.appendChild(commentPara);

        reviewsContainer.appendChild(reviewDiv);
    });
}

// Adicionar um evento ao formulário
reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter os valores dos campos
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Criar um objeto de avaliação
    const review = {
        name: name,
        rating: rating,
        comment: comment
    };

    // Adicionar ao array de avaliações
    reviews.push(review);

    // Exibir as avaliações
    displayReviews();

    // Limpar o formulário
    reviewForm.reset();
});
