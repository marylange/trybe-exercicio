const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  //console.log(fetch(url)); Desta forma é retorna o estatus da Promise

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

    /* The only pattern Chuck Norris knows is God Object.

    Na forma acima o fluxo assincrono foi controlado com os .then() e agora está respondendo corretamente.
    */
}

fetchJoke();