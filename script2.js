/*
06 - Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------
*/
let numeros = [1, 2, 3];
let impares = 0;

for( let index = 0; index < numeros.length; index += 1) {
  if (numeros % 2 == 1) {
    impares = numeros[index];
  }
}
console.log(impares);
// function oddNumbers(){
  
// }

// module.exports = oddNumbers;