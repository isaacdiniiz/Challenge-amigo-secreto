let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, insira um nome válido');
    } else {
        amigos.push(amigo);
        atualizaAmigos();
    }
    let campo = document.querySelector('input');
    campo.value = '';
}

function atualizaAmigos() {
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i]; 
        listaAmigos.appendChild(li);   
    } 
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Por favor, insira ao menos um amigo');
    } else {
        listaAmigos.innerHTML = '';
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById('resultado');   
        resultado.innerHTML = 'O amigo secreto sorteado é: ' + amigoSorteado;
    }
}