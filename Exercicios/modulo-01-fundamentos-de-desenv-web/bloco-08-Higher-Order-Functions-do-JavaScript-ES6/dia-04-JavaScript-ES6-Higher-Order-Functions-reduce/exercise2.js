//Faça uma função que some todos os números pares do array:

// filter e reduce

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = numbers.filter((number) => number % 2 === 0);
console.log(sum)
const result = sum.reduce((acc, curr) => acc + curr);
console.log(result);


// somente reduce

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers2)); // 152