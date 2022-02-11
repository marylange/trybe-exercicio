/* Removendo elementos do HTML através do JavaScript */

// let ingredientsItems = [
//   '500 de feijão carioquinha cozido', 
//   '200g de toucinho',
//   '1 concha de óleo',
//   '1 cebola média picada',
//   '4 dentes de alho',
//   '1 colher de sopa de sal com alho',
//   'Cheiro verde a gosto',
//   '200g de farinha de mandioca'
// ];
//                                   // importante verificar o seletor, ele pode ser uma lista
// let ingredientsList = document.querySelector('.ingredients-list'); // ul
// // console.log(ingredientsList);
//                           // array of ingredients
// for(let index = 0; index < ingredientsItems.length; index += 1) {
//   let ingredient = ingredientsItems[index]; // ingredient atual
//   console.log(ingredient + ' teste');
//   let ingredientNewListLi = document.createElement('li'); // li
//   ingredientNewListLi.innerText = ingredient;
//   ingredientNewListLi.className = 'ingredients-list-item'; 
//   /* atribuindo classe para a tag <li> */

//   ingredientsList.appendChild(ingredientNewListLi);
// };

// /* Queremos remover o ingrediente toucinho da lista */

// let ingredientListItems = document.querySelectorAll('.ingredients-list-item');
// /* selecionando a classe que foi criada para a tag <li>  */ 

// for(let index = 0; index < ingredientListItems.length; index += 1) {
//   let armazenandoTodosOsLiDaLista = ingredientListItems[index];
//   // console.log(armazenandoTodosOsLiDaLista.innerText + ' teste');

//   if(armazenandoTodosOsLiDaLista.innerText.includes('toucinho')) {
//   /* verificando se existe algum ingrediente que inclui toucinho no nome */
//     ingredientsList.removeChild(armazenandoTodosOsLiDaLista);
//   }
// };
// /* Essa variável ingredientsList é o ul, que recuperamos através do seletor querySelector e estamos removendo o toucinho */


/* 1. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho. */

let primeiroFilho = document.querySelector('#primeiroFilho');
let segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilho')

let removendoPrimeiroFilho = document.querySelector('#paiDoPai').firstElementChild.removeChild(primeiroFilho);

let pai = document.querySelector('#pai');
// console.log(pai);

let removendoSegundoEUltimoFilhoDoFilho = document.querySelector('#elementoOndeVoceEsta').nextElementSibling.removeChild(segundoEUltimoFilhoDoFilho);

console.log(removendoSegundoEUltimoFilhoDoFilho);