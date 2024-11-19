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
        mostrarDados.innerHTML = '';
        mostrarDados.style.display = 'flex'
        console.log(resposta);
        resposta.forEach((objeto, index) => {
            const tabelas = document.createElement('table');
            const tbody = document.createElement('tbody');
            tabelas.classList.add('tabelas-dados');
            mostrarDados.appendChild(tabelas);
            tabelas.appendChild(tbody);
            
            Object.entries(objeto).forEach(([chave, valor]) => {
                const linha = document.createElement('tr');
                const th = document.createElement('th');
                const td = document.createElement('td');
                tbody.appendChild(linha);
                linha.appendChild(th);
                linha.appendChild(td);
                th.innerHTML = chave;
                td.innerHTML = valor;
            });
            });
        }
        catch (erro) {
            carregando.style.display = 'none'
            mensagemDados.innerHTML = erro;
            console.error(erro);
        }
    }

criarTabela();