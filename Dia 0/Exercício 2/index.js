const valor1 = prompt ('Insira o primeiro valor:');
const valor2 = prompt ('Insira o seegundo valor:');

const x = parseFloat(valor1);
const y = parseFloat(valor2);

const soma = x + y;
const subtracao = x - y;
const divisao = x / y;
const multiplicacao = x * y;

alert(
'RESULTADOS\n' +
'\nSoma: ' + soma +
'\nsubtração:  ' + subtracao +
'\nDivisão: ' + divisao +
'\nMultiplicação: ' + multiplicacao
);