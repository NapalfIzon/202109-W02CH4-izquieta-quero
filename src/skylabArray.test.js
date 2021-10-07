const { push, some, find, filter, map } = require("./skylabArray");

describe("Evaluación metodos de clase SkylabArray", () => {
  describe("Testeo del metodo push", () => {
    test("Cuando le pasamos 0, deberia devolver [0]", () => {
      const valor = 0;
      const expected = [0];

      const result = push(valor);

      expected(result).toEqual(expected);
    });
  });
});
