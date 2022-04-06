const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

//Quem dos simpsons dirige ? 
//Como vc sabe disso ? 
//Como vc chegou até esse pensamento?


const filtrarQuemDirigeComFor = (array) => {
  const naoDirige = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (array[index].isDriver === false) {
      naoDirige.push(array[index])
    }
  }
  return naoDirige;
}
const resultado = filtrarQuemDirigeComFor(users)
console.log(resultado);