const container = document.getElementById('container');
const carregando = document.getElementById('carregando');
const mostrarDados = document.getElementById('mostrar-dados');
const mensagemDados = document.getElementById('mensagem-dados');

function carregarDados() {
    mostrarDados.style.display = 'none';

    return new Promise((resolve, reject) => {
        const sucesso = true;
        setTimeout(() => {
            if (sucesso) {
                resolve('Os dados foram carregados com sucesso');
            } else {
                reject('Erro ao carregar os dados');
            }
        }, 3000);
    });
}


async function exibirDados() {
    try {
        const resposta = await carregarDados();
        carregando.style.display = 'none';
        mostrarDados.style.display = 'flex'
        mensagemDados.innerHTML = resposta;
    }
    catch (erro) {
        console.error(erro);
    }
}

exibirDados();