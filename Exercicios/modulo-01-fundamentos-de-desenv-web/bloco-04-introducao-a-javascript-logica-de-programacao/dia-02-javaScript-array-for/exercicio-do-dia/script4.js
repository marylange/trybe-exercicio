/*
4.Com o mesmo código do exercício anterior, caso o valor final seja
maior que 20, imprima a mensagem: "valor maior que 20".
Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
 soma = soma + numbers[index];
}
let mediaAritmetica = soma / numbers.length;

if(mediaAritmetica > 20) {
  console.log(mediaAritmetica +','+ " valor maior que 20");
} else {
  console.log(mediaAritmetica + ',' + " valor menor ou igual a 20");
}