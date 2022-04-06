/*
  Precisamos transformar todos os números em números negativos e passá-los para um novo array.
*/

// com for
const numbers1 = [1, 2, 3, 4, -5];

let numerosNegativos = [];
for(let i = 0; i < numbers1.length; i += 1) {
  if(numbers1[i] > 0) {
    numerosNegativos.push(numbers1[i] * -1);
  } else {
    numerosNegativos.push(numbers1[i]);
  }
}

// console.log(numerosNegativos);


// map

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number => ((number > 0) ? number * (-1) : number)));

// console.log(negativeNumbers);
// console.log(numbers);


/************************************************************/


/*
  Juntar dois arrays distintos em um novo array; 
*/

const produtos = ['arroz','feijão', 'alface', 'tomate'];
const precos = [2.99, 3.99, 1.5, 2];


// com for

const novoArray = [];

for(let i = 0; i < produtos.length; i+= 1) {
  const obj = {
    [produtos[i]]: precos[i]
  };
  novoArray.push(obj);
}
console.log(novoArray);

// com map

const produtosEPrecos = (listaProdutos, listaPrecos) => listaProdutos.map((produtos, index) => ({
  [produtos]: listaPrecos[index]
}));

// console.log(produtosEPrecos(produtos, precos));

/************************************************************/

/*
  Transformando lista de números para lista de objetos individuais
*/

// com map

const listaDeNumeros = [2, 4, 6].map((numero) => {
  return {
    valor: numero,
  }
})

// console.log(listaDeNumeros);

// com for

const listaDeNumeros2 = [2, 4, 6];

function imprimirListaNumeros() {
  let listaObj = [];
  for(let i = 0; i < listaDeNumeros2.length; i += 1) {
    listaObj.push({ 
      valor: listaDeNumeros2[i]
    });
  }
  return listaObj;
}

console.log(imprimirListaNumeros());