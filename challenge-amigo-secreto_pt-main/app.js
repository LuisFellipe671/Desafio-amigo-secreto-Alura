//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Adicionando amigos.
function adicionarAmigo() {
    const adicionarNomes = document.querySelector('input');
    const nome = adicionarNomes.value.trim(); 

    if (nome === '') {
        mostrarMensagem('Por favor insira um nome.');
    } else if (amigos.includes(nome)) {
        mostrarMensagem('Esse nome já está na lista.');
    } else {
        amigos.push(nome);
        atualizarLista();
        limparCampo();
    }
}

// Limpando campo.
function limparCampo() {
    const adicionarNomes = document.querySelector('input');
    adicionarNomes.value = '';
}

// Atualizando lista.
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(nomeAmigo => {
        const escolhido = document.createElement('li');
        escolhido.innerHTML = nomeAmigo;
        lista.appendChild(escolhido);
    });
}

// Sorteando amigos.
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensagem('A lista de amigos está vazia. Por favor preencha o campo.');
    } else {
        const nomeAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoEscolhido = amigos[nomeAleatorio];
        mostrarResultado(`A pessoa sorteada é: ${amigoEscolhido}`);
    }
}

// Limpando lista.
function limparLista() {
    amigos = [];
    atualizarLista();
    mostrarResultado('');
}

// Função para mostrar mensagens.
function mostrarMensagem(mensagem) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = mensagem;
}

// Função para mostrar resultado do sorteio.
function mostrarResultado(mensagem) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = mensagem;
}