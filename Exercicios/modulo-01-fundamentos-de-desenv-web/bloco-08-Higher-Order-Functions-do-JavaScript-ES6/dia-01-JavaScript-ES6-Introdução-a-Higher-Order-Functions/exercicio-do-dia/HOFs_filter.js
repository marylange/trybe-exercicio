const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter((el) => {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems('ap')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']


// for

function filtrandoFrutas(frutas, pesquisa) {
  let meusAchados = [];
  for (let i = 0; i < frutas.length; i += 1) {
    let fruta = frutas[i];
    if(fruta.indexOf(pesquisa) !== -1) {
      meusAchados.push(fruta);
    }
  }
  return meusAchados;
}

// console.log(filtrandoFrutas(fruits, 'ap'));
// console.log(filtrandoFrutas(fruits, 'an'));
