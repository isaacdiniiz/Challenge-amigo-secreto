//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(amigo);
        atualizaAmigos();
    }
    let campo = document.querySelector('input');
    campo.value = '';
}

function atualizaAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i]; 
        document.getElementById('listaAmigos').appendChild(li);   
    } 
}