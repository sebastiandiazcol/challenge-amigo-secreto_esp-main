let amigos = [];

function agregarAmigo() {
    let nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value;

    if (nombre == '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    
    actualizarLista();

    nombreInput.value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

