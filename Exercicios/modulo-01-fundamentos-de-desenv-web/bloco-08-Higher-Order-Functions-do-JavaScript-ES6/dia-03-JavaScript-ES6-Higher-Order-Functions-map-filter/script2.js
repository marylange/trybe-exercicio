// Array.map

/* Comparação entre o for e o map */

// com o for

const persons1 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames1 = []; // Necessário criar um array

for (let index = 0; index < persons1.length; index += 1) {
  fullNames1.push(`${persons1[index].firstName} ${persons1[index].lastName}`);
}

console.log(fullNames1);


// Com o map

const persons2 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames2 = persons2.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames2); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]