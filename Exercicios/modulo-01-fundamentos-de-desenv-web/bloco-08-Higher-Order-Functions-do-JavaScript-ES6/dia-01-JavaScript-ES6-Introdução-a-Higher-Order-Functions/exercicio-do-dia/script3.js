/*
  3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

    * Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const resposta_estudantes = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// param1 = array de respostas(gabarito);
// param2 = array de respostas a serem verificadas (respostas da pessoa estudante);
// param3 = função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante.

const contagem = 0;

const questionsAndAnswer = (gabarito, respEstudante, callback) => {
  for(let i = 0; i < gabarito.length; i += 1) {
    for(let j = 0; j < respEstudante.length; j += 1) {
      if(gabarito[i] === respEstudante[j]) {
        console.log(contagem);
        contagem = contagem + 1;
      } else if (gabarito[i] !== respEstudante[j]) {
        contagem = contagem + 0.5;
      } else {
        return 'N.A';
      }
    }
  }
};

console.log(questionsAndAnswer(gabarito, resposta_estudantes));
