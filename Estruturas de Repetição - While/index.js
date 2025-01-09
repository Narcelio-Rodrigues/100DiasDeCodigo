/*
let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert ("Diminuindo 20 Km/h")
}

alert("O carro parou.")
*/

let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert ("Diminuindo 20 Km/h")

    if (velocidade === 40) {
        break
    }    
}

alert("O carro parou.")