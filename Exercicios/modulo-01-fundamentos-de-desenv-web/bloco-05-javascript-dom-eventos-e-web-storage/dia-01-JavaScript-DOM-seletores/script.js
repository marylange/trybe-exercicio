// getElementById

/*
  1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

  2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
  3. Por fim, recupere o subtítulo e altere-o também.

*/

const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const title = document.getElementById("page-title").innerText = "I am a Hero";

const paragraph2 = document.getElementById("second-paragraph");
paragraph2.style.color = "yellow";

const subtitleStyle = document.getElementById("subtitle").innerText = "Um dos melhores animes do mundo!!";

console.log(document.getElementById("paragraph"));