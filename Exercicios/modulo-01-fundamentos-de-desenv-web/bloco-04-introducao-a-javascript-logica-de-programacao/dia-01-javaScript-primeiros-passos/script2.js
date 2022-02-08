/*
Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, 
isEnrolled , patientInfo e patientEmail . Esse operador retorna qual 
o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) 
retornará number .
*/

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