// função getElementsByTagName

/*
  1. Adicione uma classe igual para os dois parágrafos. ok

  2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;

  3. Altere algum estilo do primeiro deles.

  4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .

*/
let recuperandoClasse = document.getElementsByClassName('addClass');
console.log(recuperandoClasse);

let styleClass = recuperandoClasse[0].style.background = 'red';

let subtitle = document.getElementsByTagName('h4');
subtitle[0].style.color = 'blue';