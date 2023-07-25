const postagemLivros = document.getElementById('livros');
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis');

function postagem(listaDeLivros) {
    postagemLivros.innerHTML = '';
    elementoValorTotal.innerHTML = '';

    listaDeLivros.forEach(livro => {
        // let disponibilidade = verificarEstoque(livro)

        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

        postagemLivros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
    });
}

// function verificarEstoque(livro) {
//     if (livro.quantidade > 0) {
//         return 'livro__imagens'
//     } else {
//         return 'livro__imagens indisponivel'
//     }
// }

{/* <div class="livro">
    <img class="livro__imagens" src="imagens/Cangaceiro-Javascript.png"alt="Capa do livro Cangaceiro JavaScript" />
    <h2 class="livro__titulo">
      Cangaceiro JavaScript:
      Uma aventura no sertão da programação
    </h2>
    <p class="livro__descricao">Flávio Almeida</p>
    <p class="livro__preco" id="preco">R$29,90</p>
    <div class="tags">
    <span class="tag">Front-end</span>
    </div>
</div> */}