document.getElementById('sorteioButton').addEventListener('click', function () {
    let totalNumeros = parseInt(document.getElementById('totalNumeros').value);
    let quantidadeSorteio = parseInt(document.getElementById('quantidadeSorteio').value);
    let numeroSorteios = parseInt(document.getElementById('numeroSorteios').value);
    let resultadoDiv = document.getElementById('resultado');
    let progressoBarra = document.getElementById('progressoBarra');
    let progressoDiv = document.getElementById('progresso');

    resultadoDiv.innerHTML = '';
    progressoDiv.style.display = 'block';
    progressoBarra.style.width = '0%';

    if (isNaN(totalNumeros) || totalNumeros <= 0 || isNaN(quantidadeSorteio) || quantidadeSorteio <= 0 || quantidadeSorteio > totalNumeros || isNaN(numeroSorteios) || numeroSorteios <= 0) {
        resultadoDiv.innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    function gerarSorteio() {
        let numeros = [];
        while (numeros.length < quantidadeSorteio) {
            let numeroAleatorio = Math.floor(Math.random() * totalNumeros) + 1;
            if (!numeros.includes(numeroAleatorio)) {
                numeros.push(numeroAleatorio);
            }
        }
        numeros.sort((a, b) => a - b);
        return numeros;
    }

    function atualizarProgresso(progresso) {
        progressoBarra.style.width = `${progresso}%`;
    }

    function gerarResultados() {
        for (let i = 0; i < numeroSorteios; i++) {
            let numerosSorteados = gerarSorteio();
            let sorteioDiv = document.createElement('div');
            sorteioDiv.className = 'sorteio';
            sorteioDiv.innerHTML = `Sorteio ${i + 1}: ${numerosSorteados.map(num => `<span>${num}</span>`).join('')}`;
            resultadoDiv.appendChild(sorteioDiv);
            atualizarProgresso(((i + 1) / numeroSorteios) * 100);
        }
    }

    gerarResultados();

    // Mostra o botão de resetar após o sorteio
    document.getElementById('resetButton').style.display = 'inline-block';
});

document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('totalNumeros').value = '25';
    document.getElementById('quantidadeSorteio').value = '15';
    document.getElementById('numeroSorteios').value = '1';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('progressoBarra').style.width = '0%';
    document.getElementById('progresso').style.display = 'none';
    this.style.display = 'none';
});
