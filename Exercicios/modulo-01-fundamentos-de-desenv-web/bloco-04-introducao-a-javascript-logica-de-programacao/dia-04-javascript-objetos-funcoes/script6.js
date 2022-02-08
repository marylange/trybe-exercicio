// for/in  e for/of

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// Saab
// Volvo
// BMW


let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};

// hamburguer
// bife
// acarajé