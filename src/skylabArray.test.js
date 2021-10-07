const { SkylabArray } = require("./skylabArray");

describe("Testeo de la propiedad lenght de la clase SkylabArray", () => {
  test("Cuando le pasamos [0], deberia devolver 1", () => {
    const valor = [0];
    const expected = 1;

    const testLength = new SkylabArray(valor);
    const result = testLength.length();

    expect(result).toBe(expected);
  });
});
