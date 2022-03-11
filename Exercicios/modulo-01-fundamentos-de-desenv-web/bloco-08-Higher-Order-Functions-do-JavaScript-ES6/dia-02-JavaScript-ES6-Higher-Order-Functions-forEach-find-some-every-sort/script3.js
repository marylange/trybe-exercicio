// Array.forEach

/*
  Temos uma lista de emails de pessoas que passaram no processo seletivo da Trybe e precisamos enviar esses emails.
*/

let listaDePessoasAprovadas = [
  'ada.lovelece@exemplo.com',
  'chico-bento@exemplo.com',
  'dona_florinda@exemplo.com',
  'chave_chaves_chaves@exemplo.com'
];

const enviarEmail = (email) => console.log(`Email para ${email} você foi aprovada!`);

listaDePessoasAprovadas.forEach((item, indice, array) => {
  enviarEmail(item),
  console.log(`A sua posição é a de ${indice}`),
  console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`)
});


/* Tabuada do 2 */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);


/* Converter nomes para maiúculo usando o SEGUNDO PARÂMETRO */

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]


/* Para fixar */

/*
  1. Use o método forEach chamando a callback showEmailList para apresentar os emails
  2 - Leia e entenda este exemplo do forEach feito no CodePen.
*/

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);