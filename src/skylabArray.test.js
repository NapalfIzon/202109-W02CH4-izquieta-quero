const { SkylabArray } = require("./skylabArray");

describe("Testeo de la propiedad lenght de la clase SkylabArray", () => {
  test("Cuando le pasamos [0], deberia devolver 1", () => {
    const valor = [0];
    const expected = 1;

    const testLength = new SkylabArray(valor);
    const result = testLength.length;

    expect(result).toBe(expected);
  });

  test("Cuando le pasamos [0,3,'hola'], deberia devolver 3", () => {
    const valor = [0, 3, "hola"];
    const expected = 3;

    const testLength = new SkylabArray(valor);
    const result = testLength.length;

    expect(result).toBe(expected);
  });

  test("Cuando le pasamos [''], deberia devolver 0", () => {
    const valor = [""];
    const expected = 0;

    const testLength = new SkylabArray(valor);
    const result = testLength.length;

    expect(result).toBe(expected);
  });
});

describe("Testeo del metodo some() de la clase SkylabArray", () => {
  test("Cuando le pasamos [0], deberia devolver 1", () => {
    const valor = (element) => element === 3;
    const array = [1, 2, 3, 4];
    const expected = true;

    const testSome = new SkylabArray(array);
    const result = testSome.some(valor);

    expect(result).toBe(expected);
  });
});

describe("Testeo del metodo push de la clase SkylabArray", () => {
  test("Cuando le pasamos 45, deberia devolver [12, 45]", () => {
    const valor = 45;
    const expected = [12, 45];

    const testPush = new SkylabArray([12]);
    const result = testPush.push(valor);

    expect(result).toEqual(expected);
  });
});
