// Array.reduce

// com for 

const arrayNumber = [22, 12, 45, 10, 4, 34];
let armazenador = 0;

for (let i = 0; i < arrayNumber.length; i += 1) {
  if(arrayNumber[0] > arrayNumber[1]){
    armazenador = arrayNumber[i];
  }

  console.log(armazenador)
}

console.log(armazenador);