// switch -- case 1:

let sinalTransito = 'verde';

switch (sinalTransito) {
	case 'vermelho':
		console.log('Pare');
		break;
	case 'Amarelo':
		console.log('Atenção');
		break;
	case 'verde':
		console.log('Siga');
		break;
	default:
		console.log('Valor não identificado');
};

/*
  1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada';

  2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica'.

*/

// let nota;

// switch (nota) {
//   case 1
// }

// if (notaPessoaCandidata >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!");
// } 
// else if ( notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
//   console.log("Você está na nossa lista de espera");
// }
// else {
//   console.log("Você foi reprovada(o)");