const container = document.getElementById('container');
const carregando = document.getElementById('carregando');
const mostrarDados = document.getElementById('mostrar-dados');
const mensagemDados = document.getElementById('mensagem-dados');
const url = 'https://jsonplaceholder.typicode.com/posts';

async function carregarDados() {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        if (!resposta.ok) {
            throw new Error('Erro ao carregar os arquivos');
        }
        return dados;
    }
    catch (erro) {
        const msgErro = erro;
        return msgErro;
    }
}

async function criarTabela() {
    try {
        const resposta = await carregarDados();
        carregando.style.display = 'none';
        mostrarDados.style.display = 'flex'
        console.log(resposta);
        resposta.forEach(objeto => {
            const tabelas = document.createElement('table');
            tabelas.classList.add('tabelas-dados');
            container.appendChild(tabelas);

            tabelas.forEach((tabela, indice) => {
                const tbody = document.createElement('tbody');
                const tr = document.createElement('tr');
                const th = document.createElement('th');
                const td = document.createElement('td');

                
            })
        })
        
    }
    catch (erro) {
        console.error(erro);
    }
}

criarTabela();