// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30


/*
   Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
*/

// find

const numbers2 = [19, 40, 80];

const findDivisibleBy3And5 = () => {
  return numbers2.find((numero) => numero % 3 === 0 && numero % 5 === 0);
}

//console.log(findDivisibleBy3And5());


// for
let numeroDiv3E5 = 0;

for(let i = 0; i < numbers2.length; i += 1) {
  if(numbers2[i] % 3 === 0 && numbers2[i] % 5 === 0) {
    numeroDiv3E5 = numbers2[i];
    break;
  }
}
console.log(numeroDiv3E5);