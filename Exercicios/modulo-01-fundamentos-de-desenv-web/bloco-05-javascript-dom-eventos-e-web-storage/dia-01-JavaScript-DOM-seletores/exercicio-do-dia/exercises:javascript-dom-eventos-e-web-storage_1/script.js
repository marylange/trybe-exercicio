/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

let twoYearsFromNow = document.getElementsByTagName("p")[0].innerText = "Estarei trabalhando como desenvolvedora de software!!";

console.log(twoYearsFromNow);

let changeToGreen = document.getElementsByClassName("main-content");
changeToGreen[0].style.background = "rgb(76,164,109)";

let changeToRed = document.getElementsByClassName("center-content");
changeToRed[0].style.background = "white";

let textCorrection = document.getElementsByTagName("h1");
textCorrection[0].innerText = "Exercício 5.1 - JavaScript";

let upperCaseText = document.getElementById("upperCaseText");
upperCaseText.innerText = "ESTE TEXTO PRECISA ESTAR EM MAIÚSCULO";

let displayAllTags = document.getElementsByTagName("p")[0];