const button = document.getElementById('btnOrdenarPorPreco');

button.addEventListener('click', ordernarLivroPorPreco);

function ordernarLivroPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)

    postagem(livrosOrdenados)
}