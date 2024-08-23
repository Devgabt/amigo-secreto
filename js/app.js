// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionar() {
    // Obtém o elemento de entrada do nome do amigo
    let amigo = document.getElementById('nome-amigo');
    // Obtém o elemento onde a lista de amigos será exibida
    let lista = document.getElementById('lista-amigos');

    // Verifica se o campo de entrada está vazio (após remover espaços em branco)
    if (amigo.value.trim() === '') {
        alert('Não deixe o campo vazio.'); // Mostra um alerta se o campo estiver vazio
        return; // Sai da função sem fazer mais nada
    }

    // Verifica se o amigo já está na lista de amigos
    if (amigos.includes(amigo.value)) {
        alert('Amigo já incluído.'); // Mostra um alerta se o amigo já estiver na lista
        return; // Sai da função sem fazer mais nada
    }

    // Adiciona o nome do amigo ao array 'amigos'
    amigos.push(amigo.value);

    // Atualiza o elemento 'lista' com os nomes dos amigos
    if (lista.textContent === '') {
        lista.textContent = amigo.value; // Se a lista estiver vazia, adiciona o primeiro nome
    } else {
        lista.textContent += ', ' + amigo.value; // Caso contrário, adiciona o novo nome separado por vírgula
    }

    // Limpa o campo de entrada após adicionar o nome à lista
    amigo.value = '';
}

function sortear() {
    // Embaralha a lista de amigos
    embaralhar(amigos);

    // Avisa o usuário se houver menos que 4 amigos participantes
    if(amigos.length < 4){
        alert('Adicione ao menos 4 amigos.');
        return;
    }

    // Obtém o elemento onde o sorteio será exibido
    let sorteio = document.getElementById('lista-sorteio');
    // Limpa o conteúdo do sorteio antes de adicionar novos resultados
    sorteio.innerHTML = '';

    // Percorre a lista de amigos para exibir o sorteio
    for (let i = 0; i < amigos.length; i++) {
        // Se for o último amigo na lista, o próximo amigo será o primeiro na lista
        if (i === amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            // Caso contrário, o próximo amigo é o próximo na lista
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

// Função para embaralhar a lista usando o algoritmo Fisher-Yates
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        // Gera um índice aleatório para trocar elementos na lista
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // Troca os elementos na lista
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    // Reinicia a lista de amigos
    amigos = [];
    // Limpa o conteúdo do elemento 'lista-amigos'
    document.getElementById('lista-amigos').textContent = '';
    // Limpa o conteúdo do elemento 'lista-sorteio'
    document.getElementById('lista-sorteio').innerHTML = '';
}
