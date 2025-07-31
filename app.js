let amigos = [];

function agregarAmigo() {
    let nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value;

    if (nombre == '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    
    document.getElementById('listaAmigos').textContent = amigos.join(', ');

    nombreInput.value = '';
}

