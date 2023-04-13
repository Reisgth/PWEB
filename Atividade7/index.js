
    var escolhaUsuario = prompt("Digite sua escolha (pedra, papel ou tesoura)");

    var escolhaComputador = Math.floor(Math.random() * 3 + 1);
  
    if (escolhaComputador === 1) {
        escolhaComputador = 'pedra';
    } else if (escolhaComputador === 2) {
        escolhaComputador = 'papel';
    } else {
        escolhaComputador = 'tesoura';
    }

    var resultado = '';
    if (escolhaUsuario == escolhaComputador) {
        resultado = 'Empate!';
    } else if (
        (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura') ||
        (escolhaUsuario == 'papel' && escolhaComputador == 'pedra') ||
        (escolhaUsuario == 'tesoura' && escolhaComputador == 'papel')
    ) {
        resultado = 'Você ganhou!';
    } else {
        resultado = 'Você perdeu!';
    }

    alert('Você escolheu ' + escolhaUsuario + ' e o computador escolheu ' + escolhaComputador + ' portanto ' + resultado);