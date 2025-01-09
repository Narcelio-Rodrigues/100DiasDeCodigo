//Retornam um resultado booleano (true ou false)
/*
OPERADORES
== e ===
!= e !==
>, >=, <, <=
*/ 

/*
1. COMPARAÇÃO DE IGUALDADE

    #Igualdade Simples (==): Compara dois valores, convertendo-os para o mesmo tipo antes da comparação (coerção de tipo).
    */

    console.log(5 == '5'); // true (os valores são iguais após a conversão)
    console.log(true == 1); // true (true é convertido para 1)

    /*
    #Igualdade Estrita (===): Compara dois valores e seus tipos sem conversão de tipo. É a forma recomendada de comparação, pois evita resultados inesperados.
    */

    console.log(5 === '5'); // false (os tipos são diferentes: número vs string)
    console.log(true === 1); // false (os tipos são diferentes: boolean vs número)

/*
2. COMPARÇÃO DE DESIGUALDADE
    #Desigualdade Simples (!=): Compara dois valores, convertendo-os para o mesmo tipo antes da comparação.
    */

    console.log(5 != '5'); // false (os valores são iguais após a conversão)
    console.log(true != 1); // false (true é convertido para 1)
    
    /*
    #Desigualdade Estrita (!==): Compara dois valores e seus tipos sem conversão de tipo.
    */

    console.log(5 !== '5'); // true (os tipos são diferentes)
    console.log(true !== 1); // true (os tipos são diferentes)

/*
3. COMPARAÇÃO DE MAIOR OU MENOR
    #Maior que (>): Verifica se o valor da esquerda é maior que o da direita.
    */

    console.log(10 > 5); // true
    console.log('b' > 'a'); // true (comparação lexicográfica)

    /*
    #Maior ou igual (>=): Verifica se o valor da esquerda é maior ou igual ao da direita.
    */
    
    console.log(10 >= 10); // true
    console.log('a' >= 'a'); // true

    /*
    #Menor que (<): Verifica se o valor da esquerda é menor que o da direita.
    */

    console.log(5 < 10); // true
    console.log('a' < 'b'); // true (comparação lexicográfica)

    /*
    #Menor ou igual (<=): Verifica se o valor da esquerda é menor ou igual ao da direita.
    */

    console.log(10 <= 10); // true
    console.log('a' <= 'a'); // true

/*
4. COMPARAÇÃO DE TIPOS
    #'typeof': Retorna o tipo de um valor, útil para verificar o tipo antes de comparar.
    */

    console.log(typeof 42); // "number"
    console.log(typeof 'Hello'); // "string"
    console.log(typeof true); // "boolean"

    /*
    #'instanceof': Verifica se um objeto %C3%A9 uma inst%C3%A2ncia de um determinado construtor.
    */

    let arr = [];
    console.log(arr instanceof Array); // true
    console.log(arr instanceof Object); // true (arrays são objetos)


