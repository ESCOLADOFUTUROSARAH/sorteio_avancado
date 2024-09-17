// Adiciona um ouvinte de evento ao botão com o ID 'sorteioButton'.
// Quando o botão é clicado, a função anônima é executada.
document.getElementById('sorteioButton').addEventListener('click', function () {

    // Obter valores de entradas
    // 'totalNumeros' recebe o valor do input com ID 'totalNumeros' convertido para número inteiro.
    let totalNumeros = parseInt(document.getElementById('totalNumeros').value);

    // 'quantidadeSorteio' recebe o valor do input com ID 'quantidadeSorteio' convertido para número inteiro.
    let quantidadeSorteio = parseInt(document.getElementById('quantidadeSorteio').value);

    // 'numeroSorteios' recebe o valor do input com o ID 'numeroSorteios' convertido para número inteiro.
    let numeroSorteios = parseInt(document.getElementById('numeroSorteios').value);

    // Seleciona o elemento que exibirá os resultados.
    let resultadoDiv = document.getElementById('resultado');

    // Limpa os resultados anteriores, caso existam.
    resultadoDiv.innerHTML = '';

    // Validação das entradas
    // Verifica se as entradas são números válidos, se 'totalNumeros' e 'quantidadeSorteio' são maiores que 0,
    // se 'quantidadeSorteio' não é maior que 'totalNumeros', e se 'numeroSorteios' é maior que 0
    if (isNaN(totalNumeros) || totalNumeros <= 0 || isNaN(quantidadeSorteio) || quantidadeSorteio <= 0 || quantidadeSorteio > totalNumeros || isNaN(numeroSorteios) || numeroSorteios <= 0) {

        // Se alguma validação falhar, exibe uma mensagem de erro no 'resultadoDiv'.
        resultadoDiv.innerHTML = 'Por favor, insira valores válidos.';

        // Interrompe a execução da função.
        return;
    }

    // Função para gerar um único sorteio
    function gerarSorteio() {

        // Inicializa um array vazio que armazenará os números sorteados.
        let numeros = [];

        // Loop que continua até que o número especificado de 'quantidadeSorteio' seja sorteado.
        while (numeros.length < quantidadeSorteio) {

            // Gera um número aleatório entre 1 e o valor de 'totalNumeros'.
            let numeroAleatorio = Math.floor(Math.random() * totalNumeros) + 1;

            // Verifica se o número aleatório ainda não foi sorteado.
            // Se o número ainda não está no array 'numeros', ele é adicionado.
            if (!numeros.includes(numeroAleatorio)) {
                numeros.push(numeroAleatorio);
            }
        }

        // Ordena o array 'numeros' em ordem crescente.
        numeros.sort(function (a, b) {
            return a - b;
        });

        // Retorna o array 'numeros' ordenado.
        return numeros;
    }

    // Gerar sorteios e exibi-los
    // Loop que gera o número de sorteios especificado por 'numeroSorteios'.
    for (let i = 0; i < numeroSorteios; i++) {

        // Chama a função 'gerarSorteio' para obter um array de números sorteados.
        let numerosSorteados = gerarSorteio();

        // Cria um novo elemento 'div' para exibir os números sorteados.
        let sorteioDiv = document.createElement('div');

        // Define a classe CSS do 'div' como 'sorteio' para estilização.
        sorteioDiv.className = 'sorteio';

        // Define o texto do 'div' como o número do sorteio e os números sorteados, separados por vírgulas.
        sorteioDiv.innerText = `Sorteio ${i + 1}: ${numerosSorteados.join(', ')}`;

        // Adiciona o 'div' com o resultado do sorteio ao 'resultadoDiv'.
        resultadoDiv.appendChild(sorteioDiv);
    }
}); // THE END