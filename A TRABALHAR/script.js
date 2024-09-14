document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    document.getElementById('searchResults').innerText = `Resultados de busca para "${searchInput}"`;
});

document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Reserva feita com sucesso!');
});

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pagamento realizado com sucesso!');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});
