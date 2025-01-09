/*
Permite criar blocos de código que vão ser executados somente quando uma determinada operção lógica for verdadeira

    SE condição === true ENTAO faça algo

Além disso, pode ser usado com o ELSE para acrescentar um bloco que vai ser executado somente quando essa mesma operação lógica for falsa

    SE condição === true ENTAO faça uma coisa SENÃO faça outra coisa
 */

/*
if (6 === 6) {
    console.log("Verdadeiro")
}   else {
    console.log("Falso")
}
*/

// const idade = prompt ("Informe a sua idade: ")
/*
if (idade > 18) {
    alert("Você é maior de idade")
}   else {
    alert("Você é menor de idade")
}
*/

/*
if (idade > 18) {
    alert("Você é maior de idade")
}   else {
    alert("Você é menor de idade")

     if (idadev < 12) {
        alert ("Você é criança")
    }
}
*/

/*
if (idade > 18) {
    alert("Você é maior de idade")
}   else if (idade > 12) {
    alert("Você é menor de idade")
}   else if (idade > 4) {
    alert ("Você é criança")
}   else {
    alert ("..")
}
*/

/*
OPERADOR TERNÁRIO
Forma abreviada e autoavaliada
Sintaxe:
const resultado = condicao ? resultado_verdadeiro : resultado_falso
*/

/* exemplo
 const resultado = (6 === 6) ? "Verdadeiro" : "Falso"
 
 console.log(resultado)

*/

// EXEMPLO:
const idade = prompt ('Informe a sua idade:');
const maiorIdade = (idade > 18) ? alert ('Você é maior de idade') : alert ('Você é menor de idade.' + '\nAcesso Negado!')