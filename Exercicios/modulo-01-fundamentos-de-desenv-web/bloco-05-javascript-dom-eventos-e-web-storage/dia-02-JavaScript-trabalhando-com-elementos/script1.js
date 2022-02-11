// Buscar elementos

// arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>


/*
  1. Acesse o elemento elementoOndeVoceEsta .
  2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
  3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
  4. Acesse o primeiroFilho a partir de pai .
  5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
  6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
  7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
  8. Agora acesse o terceiroFilho a partir de pai .
*/

console.log(document.getElementById('elementoOndeVoceEsta'));

console.log(document.getElementById('elementoOndeVoceEsta').parentNode.style.color="blue");

console.log(document.getElementById('primeiroFilho').innerText = "Adicionando um texto ao primeiro filho");

console.log(document.getElementById('pai').firstChild);

console.log(document.getElementById('elementoOndeVoceEsta').firstChild);

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').lastElementChild.previousElementSibling);