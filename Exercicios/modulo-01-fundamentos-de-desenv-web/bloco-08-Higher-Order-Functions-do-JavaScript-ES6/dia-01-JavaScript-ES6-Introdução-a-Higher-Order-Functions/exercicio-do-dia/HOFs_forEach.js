/*
Temos uma lista de emails de pessoas aprovadas no processo seletivo da Trybe, agora precisamos avisa-las.
*/

let listaDePessoasAprovadas = [
  'ada.lovelece@exemplo.com',
  'chico-bento@exemplo.com',
  'dona_florinda@exemplo.com',
  'chave_chaves_chaves@exemplo.com'
];

// forEach

listaDePessoasAprovadas.forEach((email, indice, array) => {
  console.log(`Email para ${email} você foi aprovada! A sua posição é a de ${indice} e A quantidade de pessoas no processo seletivo é: ${array.length}`)
});

// for

function enviaEmail(email, indice, array) {
  console.log(`Email para: ${email} você foi aprovada!
    A sua posição é a de ${indice} e a quantidade de pessoas no processo seletivo é:${array.length}`);
};

function alunosAprovados (array) {
  for(let i = 0; i < array.length; i += 1) {
    enviaEmail(array[i], i, array);
  }
};

alunosAprovados(listaDePessoasAprovadas);


