// Array.reduce

// com for 

const arrayNumber = [22, 12, 45, 10, 4, 34];
let maior = 0;

for (var i = 0; i < arrayNumber.length; i += 1) {
  if ( arrayNumber[i] > maior ) {
     maior = arrayNumber[i];
    }
  }

// console.log(maior);


// com reduce
const arrayNumber2 = [22, 12, 45, 10, 4, 34];

const bigNumber = arrayNumber2.reduce((acc, curr) => acc > curr ? acc : curr);

console.log(bigNumber);