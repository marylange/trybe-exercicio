// variáveis

/*
  1. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).

  2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.

  3. Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.

  4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.

  5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
  
  6. Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
*/
const myName = "Marylange";

let birthCityLet = "Maranguape"; // let permite reatribuições e const não permite.
birthCityLet = "Fortaleza"; // reatribuição

const birthCity = "Maranguape";
birthCity = "Fortaleza"; // TypeError: Assignment to constant variable.

const birthYear = 1988;
birthYear = 2030; // TypeError: Assignment to constant variable.

console.log(myName);
console.log(birthCity);
console.log(birthYear);



