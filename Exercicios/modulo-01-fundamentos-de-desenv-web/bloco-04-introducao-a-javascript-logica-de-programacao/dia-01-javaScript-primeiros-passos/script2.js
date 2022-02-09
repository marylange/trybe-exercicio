// tipos primitivos, dinâmicos e operações aritméticas

/*
Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, 
isEnrolled , patientInfo e patientEmail . Esse operador retorna qual 
o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) 
retornará number .
*/

/*
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

// console.log(typeof patientAge); // verificando variável que não declarada

let patientAge = 50;
patientAge = '50';

console.log(typeof patientAge);
*/

/*
  1. Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
*/
const base = 5;
let height = 8;

/*
  2. Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
*/

const area = base * height;

console.log(area);


/*
  3. Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

*/

const perimeter = area * 2;

console.log(perimeter);
