const veiculo1 = prompt ('Insira o nome do Veículo 1');
const velocidade1 = parseFloat(prompt ('Insira a velocidade do Veículo 1 (km/h):'));

const veiculo2 = prompt ('Insira o nome do Veículo 2');
const velocidade2 = parseFloat(prompt ('Insira a velocidade do Veículo 2 (km/h):'));


if (velocidade1 > velocidade2) {
    alert (veiculo1 + ' é mais rápido do que ' + veiculo2);
}   else if (velocidade2 > velocidade1) {
    alert (veiculo2 + ' é mais rápido do que ' + veiculo1);  
}   else {
    alert (veiculo1 + ' e ' + veiculo2 + ' possuem velocidades iguais.');
}