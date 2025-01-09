/*
OPERADORES LÓGICOS
E (END)
OU (OR)
NÃO (NOT)
*/

/*

E (END)
Só é verdadeiro se ambas as partes forem verdadeiras

operador &&

 p | p | p^q
 t | t | t  true && true === true
 t | f | f  true && false === false
 f | t | f  false && true === false
 f | f | f  false && false === false

*/

/*

OU (OR)
Só é falso se ambas as partes forem falsas

operador ||

 p | p | p^q
 t | t | t  true || true === true
 t | f | t  true || false === true
 f | t | t  false || true === true
 f | f | f  false || false === false

*/

/*

NÃO (NOT)
Inverte o resultado (de verdadeiro para falso e vice-versa)

operador !

 p | ~p |
 t | f  |     !true === false
 f | t  |     !false === true

 or

 p | ~p |
 1 | 0  |     !true === false
 0 | 1  |     !false === true

*/