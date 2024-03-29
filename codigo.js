// Esta função é chamada quando um botão numérico é clicado para inserir um valor no campo de votação
function inserir(valor) {
    var campo = document.getElementById("campo"); // Obtém o elemento de entrada de texto onde os números são inseridos
    campo.value += valor; // Concatena o valor clicado ao valor atual do campo de entrada
}

// Esta função é chamada quando o botão "Corrigir" é clicado para limpar o campo de votação
function corrige() {
    var campo = document.getElementById("campo"); // Obtém o elemento de entrada de texto
    campo.value = ""; // Limpa o valor do campo
}

// Esta função é chamada quando o botão "Votar" é clicado para registrar um voto para o candidato inserido
function votar() {
    var campo = document.getElementById("campo"); // Obtém o elemento de entrada de texto
    var candidato = parseInt(campo.value); // Converte o valor do campo para um número inteiro

    // Verifica se o valor inserido é um número válido
    if (!isNaN(candidato)) {
        // Verifica se o candidato já possui votos registrados
        if (sessionStorage.getItem(candidato)) {
            var votos = parseInt(sessionStorage.getItem(candidato)) + 1; // Incrementa o número de votos
            sessionStorage.setItem(candidato, votos); // Atualiza o número de votos para o candidato
        } else {
            sessionStorage.setItem(candidato, 1); // Registra o primeiro voto para o candidato
        }

        alert("Confirmado voto no candidato " + candidato); // Exibe um alerta confirmando o voto
        campo.value = ""; // Limpa o campo de votação após o voto ser registrado
    } else {
        alert("Por favor, insira um número de candidato válido."); // Exibe um alerta se o número inserido não for válido
    }
}

// Esta função é chamada quando o botão "Resultado" é clicado para exibir os resultados da votação
function resultado() {
    var resultadoElement = document.getElementById("resultado"); // Obtém o elemento onde os resultados serão exibidos
    resultadoElement.innerHTML = ""; // Limpa qualquer conteúdo anterior do elemento

    // Loop através dos candidatos (assumindo que há 100 candidatos numerados de 0 a 99)
    for (var i = 0; i < 100; i++) {
        var votos = sessionStorage.getItem(i); // Obtém o número de votos para o candidato atual
        if (votos !== null) { // Verifica se há votos registrados para o candidato atual
            resultadoElement.innerHTML += "Candidato " + i + " tem " + votos + " votos<br/>"; // Exibe os resultados para o candidato atual
        }
    }
}
