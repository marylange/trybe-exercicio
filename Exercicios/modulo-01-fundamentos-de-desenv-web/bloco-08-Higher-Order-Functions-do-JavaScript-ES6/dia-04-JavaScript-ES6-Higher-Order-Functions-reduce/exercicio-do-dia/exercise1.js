// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatten());

//Resolução obtida do gabarito da Trybe