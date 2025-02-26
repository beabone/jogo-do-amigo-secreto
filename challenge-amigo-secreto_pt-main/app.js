let amigos = []

function adicionarAmigo(){
        const nomeInput = document.getElementById('amigo').value;
    
        if (nomeInput.trim() === "") {
            alert("Insira um nome!");
        } else {
            amigos.push(nomeInput);

            document.getElementById('amigo').value = "";
            lista();
    }

}

function lista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";  

    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos a lista antes de sortear.");
        return; 
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceSorteado];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; 

    limparLista();
}   
function limparLista(){
    amigos = []; 
    lista();
}



