// 7. Crie um programa que receba a nota de um aluno (de 0 a 10). Se a nota for maior ou igual a 6, exiba "Aprovado". Caso contrário, exiba "Reprovado".

// let nota = parseFloat(prompt("Qual a nota do aluno? (de 0 a 10)"))
// if (nota >= 0 && nota <= 10) {
//     if (nota >= 6) {
//         alert("Aluno Aprovado!")
//     } else {
//         alert("Aluno Reprovado!")
//     }
// } else {
//     alert("Por favor, insira uma nota válida entre 0 e 10.")
// }



// 8. Faça um programa que receba a idade de uma pessoa e diga se ela é menor de idade, adulta ou idosa (menor de 18, entre 18 e 60, ou acima de 60).
// let idade = parseFloat(prompt("Digite a sua idade:"))
// if (idade < 18) {
//     alert("Você é menor de idade!")
// } else if (idade >= 18 && idade <= 60) {
//     alert("Você é adulta!")
// } else {
//     alert("Você é idosa!")
// }



// 9. Escreva um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 para segunda-feira, 7 para domingo).
// let diaDaSemana = parseFloat(prompt("Digite um número de 1 a 7 para exibir o dia da semana correspondente:"))

// switch (diaDaSemana) {
//     case 1:
//         alert("Segunda-feira")
//     break
//     case 2:
//         alert("Terça-feira")
//     break
//     case 3:
//         alert("Quarta-feira")
//     break
//     case 4:
//         alert("Quinta-feira")
//     break
//     case 5:
//         alert("Sexta-feira")
//     break
//     case 6:
//         alert("Sábado")
//     break
//     case 7:
//         alert("Domingo")
//     break
//     default:
//         alert("Dia da semana inválido! Por favor, digite um número de 1 a 7")
// }



// 10. Crie um programa que receba uma nota de 0 a 10 e exiba o conceito correspondente:
// 10-9: "A"
// 8-7: "B"
// 6-5: "C"
// 4-0: "D"

let nota = parseFloat(prompt("Digite sua nota de 0 a 10:"))

switch (true) {
    case nota >= 9 && nota <= 10:
        alert("A")
        break;
    case nota >= 7 && nota < 9:
        alert("B")
        break;
    case nota >= 5 && nota < 7:
        alert("C")
        break;
    case nota >= 0 && nota < 5:
        alert("D")
        break
    default:
        alert("Digite uma nota válida entre 0 e 10!")
}
