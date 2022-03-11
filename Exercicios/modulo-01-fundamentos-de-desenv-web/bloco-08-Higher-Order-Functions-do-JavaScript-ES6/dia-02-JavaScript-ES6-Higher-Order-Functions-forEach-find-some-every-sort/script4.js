// Array.find

/* Retornar o valor maior que 20 */

const arrayListaNumeros = [3, 15, 20, 5, 40, 18];

const verificaNumeros = arrayListaNumeros.find((numero) => numero > 20);
console.log(verificaNumeros); // 40


/* Retornando o primeiro número par da lista */

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30


/* Para fixar */

/*
  1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
*/

const numeros = [19, 21, 30, 3, 45, 22, 15];

const EncontrarDivisivelPor3E5 = () => {
  // Adiciona seu código aqui
  const result = numeros.find((numero) => numero % 3 === 0 && numero % 5 === 0);
  return result;
}

console.log(EncontrarDivisivelPor3E5(numeros));

/*
  2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
*/

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const nameCom5Letras = names.find(elemento => elemento.length === 5);
  return nameCom5Letras;
}

console.log(findNameWithFiveLetters());


/*
  3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
*/

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic() {
  // Adicione seu código aqui
  const result = musicas.find( id => id.id === '31031685');
  return result;
}

console.log(findMusic('31031685'))