let ingredientsItems = [
  '500 de feijão carioquinha cozido', 
  '200g de toucinho',
  '1 concha de óleo',
  '1 cebola média picada',
  '4 dentes de alho',
  '1 colher de sopa de sal com alho',
  'Cheiro verde a gosto',
  '200g de farinha de mandioca'
];
                                  // importante verificar o seletor, se é lista ou unitário
let ingredientsList = document.querySelector('.ingredients-list'); // ul
console.log(ingredientsList);
                          // array of ingredients
for(let index = 0; index < ingredientsItems.length; index += 1) {
  let ingredient = ingredientsItems[index]; // ingredient atual
  
  let ingredientNewListLi = document.createElement('li'); // li
  ingredientNewListLi.innerText = ingredient;

  ingredientsList.appendChild(ingredientNewListLi);
};

/*
  E a prática? Aqui!
  1. Crie um irmão para elementoOndeVoceEsta.
*/

let pai = document.querySelector('#pai');
let sisterElement = document.createElement('div');
sisterElement.className = 'quintaFilha';
pai.appendChild(sisterElement);

/*
  2. Crie um filho para elementoOndeVoceEsta.
*/

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let terceiroFilhoDoElementoOndeVoceEsta = document.createElement('div');
terceiroFilhoDoElementoOndeVoceEsta.className = "terceiroFilhoDoFilho";
elementoOndeVoceEsta.appendChild(terceiroFilhoDoElementoOndeVoceEsta).innerHTML;

// console.log(elementoOndeVoceEsta);

/*
  3. Crie um filho para primeiroFilhoDoFilho.
*/

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let primeiroNetoDoFilhoDoFilho = document.createElement('div');
primeiroNetoDoFilhoDoFilho.className = 'primeiroNetoDoFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(primeiroNetoDoFilhoDoFilho);

// console.log(primeiroFilhoDoFilho);

/*
  4. A partir desse filho criado, acesse terceiroFilho .
*/



console.log(document.querySelector('.primeiroNetoDoFilhoDoFilho').parentNode.parentNode.nextElementSibling);

