const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

let livros = [];

async function getLivrosAPI() {
    try {
        const res = await fetch(endpointAPI);
        livros = await res.json();
        
        let livrosComDesconto = aplicarDesconto(livros);

        postagem(livrosComDesconto);
    } catch {
        console.log('Erro com a conexão do endpoint');
    }   
}

getLivrosAPI();


