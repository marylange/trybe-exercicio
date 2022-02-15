// JSON.stringify()

function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

let foo = {fundação: "Mozilla", modelo: "caixa", semana: 45, transporte: "carro", mês: 7};
let jsonString = JSON.stringify(foo, replacer);
console.log(jsonString);