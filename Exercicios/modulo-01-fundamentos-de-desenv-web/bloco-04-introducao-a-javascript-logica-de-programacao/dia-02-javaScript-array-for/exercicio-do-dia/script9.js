/*
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

let soma = 0;
for(let index = 0; index < array.length; index += 1) {
  soma += array[index];
}

console.log(soma / 2);

let array = [];

for(let index = 1; index <= 25; index += 1) {
  array.push(index);
}

console.log(array);

for(let index = 0; index < array.length; index += 1) {
  let atual = array[index];
  console.log(atual / 2);
}