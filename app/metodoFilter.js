const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    postagem(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDisponivel(livrosFiltrados);

        exibirValorTotal(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(valorTotal) {
    elementoValorTotal.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">R$${valorTotal}</span></p>
        </div>
    `
}