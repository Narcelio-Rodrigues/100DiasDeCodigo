// Escreva um código que percorra a string "Programação" e exiba cada caractere no console.

let nome = "Programação"

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

// Modifique o loop para que ele exiba cada caractere da string "JavaScript" em maiúsculas no console.
// Dica: Use o método .toUpperCase().

let linguagem = "JavaScript"

for (let i = 0; i < linguagem.length; i++) {
    console.log(linguagem[i].toUpperCase())
}

// Escreva um código que conte quantas vogais (a, e, i, o, u) existem na string "".
let texto = "Desenvolvimento"
let contador = 0

for (let i = 0; i < texto.length; i++) {
    let caractere = texto[i].toLowerCase()
    if ("aeiou".includes(caractere)) {
        contador ++
    }
}
console.log(contador)

// Percorra a string "Full Stack" e exiba seus caracteres no console, mas de trás para frente.

let nome1 = "Full Stack"

for(let i = nome1.length; i >= 0; i--) {
    console.log(nome1[i])
}

// Exercício 5: Substituir caracteres
// Percorra a string "Banana" e exiba a mesma string no console, mas substituindo todas as letras 'a' por 'o'.
// Resultado esperado: "Bonono".

let fruta = "Banana"
let resultado = ""

for (let i = 0; i < fruta.length; i++) {
    if (fruta[i] === "a") {
        resultado += "o"
    } else {
        resultado += fruta[i]
    }
}
console.log(resultado);