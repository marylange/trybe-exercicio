/*
5. Utilizando for , descubra qual o maior valor contido
no array e imprima-o;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if(maiorNumero < numbers[index]) {
    maiorNumero = numbers[index];
  }
}
console.log("É o maior " + maiorNumero);
// let numero = 7;
// for (let index = 1; index <= 9; index += 1) {
//   console.log(numero * index);
// }
