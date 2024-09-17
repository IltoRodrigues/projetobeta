document.getElementById('avaliacaoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Capturar os valores do formulário
    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;
    const nota = document.querySelector('input[name="nota"]:checked').value;

    // Criar um elemento para a nova avaliação
    const novaAvaliacao = document.createElement('div');
    novaAvaliacao.classList.add('avaliacao');

    // Adicionar conteúdo à nova avaliação
    novaAvaliacao.innerHTML = `
        <p><strong>${nome}:</strong></p>
        <p>${comentario}</p>
        <p class="nota">${'★'.repeat(nota)}</p>
    `;

    // Exibir a nova avaliação
    document.getElementById('avaliacoes').appendChild(novaAvaliacao);

    // Limpar o formulário
    document.getElementById('avaliacaoForm').reset();
});
