// função getElementsByClassName


let homeWork = document.getElementsByClassName("homeWork");

for(let index = 0; index < homeWork.length; index += 1) {
  homeWork[index].innerText = "Apoio de pé";
};


/*
  Eu consigo fazer alterações do conteúdo que está no HTML através da função getElementsByClassName selecionando a class.
*/

/*
  1. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
*/

let recuperandoClasse = document.getElementsByClassName("addClass");