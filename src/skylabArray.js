class SkylabArray {
  constructor(valor) {
    this.array1 = valor;
    this.length = this.valorLength(valor);
  }

  // eslint-disable-next-line class-methods-use-this
  valorLength(valor) {
    let contador = 0;
    for (const elemento of valor) {
      if (elemento !== "") {
        contador++;
      }
    }
    return contador;
  }

  push(valor) {
    const arrayPush = this.array1;
    arrayPush[this.valorLength(this.array1)] = valor;
    this.length = this.valorLength(arrayPush);
    return arrayPush;
  }

  some(valor) {
    //
  }

  find(valor) {
    //
  }

  filter(valor) {
    //
  }

  map(valor) {
    //
  }
}

module.exports = {
  SkylabArray,
};

debugger;
const array1 = function ejecutable() {
  return 2 + 2;
}; // devuelve 4
const arrayComparar = [1, 2, 3, 4];

function prueba(expresion) {
  let respuesta = false;
  for (const elemento of arrayComparar) {
    if (Object.is(true, expresion(elemento))) {
      respuesta = true;
    }
  }
  return respuesta;
}

console.log(prueba((element) => element === 3));
