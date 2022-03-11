// Array.some e Array.every

/* Com o some, vamos testar se elementos do array são maiores que 10 */

function isBiggerThan10(element) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true


/* O every será usado para verificar se o estudante passou em todas as matérias */

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => {
  console.log(Object.values(studentGrades).every((grade) => grade === 'Aprovado'));
  // Object.values está retornando a função grades através studentGrades
};

console.log(verifyGrades(grades));


/* Para fixar */

/*
  1. Escreva uma função que dado um array de nomes e um nome, retorne true se ele estiver contido, e caso contrário, retorne false. Use some;
*/

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((item) => item === name);
}

console.log(hasName(names, 'Ana'))

/*
  2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every;
*/

const pessoas = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verificaIdade = (arr, idadeMinima) => {
  return arr.every((pessoa) => pessoa.age >= idadeMinima);
}

console.log(verificaIdade(pessoas, 18));
