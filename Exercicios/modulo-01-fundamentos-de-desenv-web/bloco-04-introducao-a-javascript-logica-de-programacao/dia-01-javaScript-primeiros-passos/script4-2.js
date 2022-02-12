// operadores lógicos - OR

const bebidaPrincipal =  'água de coco';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'água de coco' || bebidaAlternativa === 'suco de uva') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

// somente um precisa ser verdadeiro para dar true e precisamos de dois elementos para que a operação funcione corretamente.


/*
  1. Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

  2. Implemente condicionais para que:
    * Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".

    * Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

  Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

*/

let weekDay = 'sábado';

if(weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
  console.log('FINALMENTE, descanso merecido UwU');
}


