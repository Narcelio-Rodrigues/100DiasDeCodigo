const primeiroNome = prompt ('Informe seu primeiro nome:')
const sobrenome = prompt ('Informe seu sobrenome:')
const campoDeEstudo = prompt ('Informe seu Campo de Estudo:')
const anoDeNascimento = prompt ('Informe seu ano de nascimento:')

alert(
    'RECRUTA CADASTRADO COM SUCESSO!\n' +
    '\nNome Completo: ' + primeiroNome + ' ' + sobrenome +
    '\nCampo De Estudo: ' + campoDeEstudo +
    '\nIdade: ' + (2024 - anoDeNascimento)
);