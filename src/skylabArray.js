class SkylabArray {
  constructor(valor) {
    this.array1 = valor;
    this.length = (array1) => {
      let contador = 0;
      for (const elemento of valor) {
        if (elemento !== "") {
          contador++;
        }
      }
      return contador;
    };
  }

  push(valor) {
    return [0];
    /* const arrayTest = [];
    return arrayTest.push(this.valor); */
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

/* const array1 = [0, 0, 9];
let contador = 0;

function length(array1) {
  for (const valor of array1){
    if(valor !== ''){
      contador++;
    }
  }
}
length(array1);

console.log(contador);


length(array1);
 */
