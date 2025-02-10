import { MathOperations } from "../utils/math";
// Pruebas unitarias

describe("MathOperations Funciona correctamente", () => {
  it("Suma Correctamente", () => {
    expect(MathOperations.add(2, 3)).toBe(5);
    expect(MathOperations.add(4, 3)).toBe(7);
    expect(MathOperations.add(-10, 3)).toBe(-7);
  });

  it("Resta Correctamente", () => {
    expect(MathOperations.subtract(2, 3)).toBe(-1);
    expect(MathOperations.subtract(4, 3)).toBe(1);
    expect(MathOperations.subtract(-10, 3)).toBe(-13);
  });

  it("Multiplica Correctamente", () => {
    expect(MathOperations.multiply(2, 3)).toBe(6);
    expect(MathOperations.multiply(-4, 3)).toBe(-12);
    expect(MathOperations.multiply(10, 0)).toBe(0);
  });

  it("Divide Correctamente", () => {
    expect(MathOperations.divide(6, 3)).toBe(2);
    expect(MathOperations.divide(-4, 2)).toBe(-2);
    expect(MathOperations.divide(0, 10)).toBe(0);
    expect(MathOperations.divide(10, 0)).toBe("Error: División por cero");
  });

  it("Math asyncOperation multiplica arrelgos", async () => {
    // const result = await MathOperations.asyncArrayMultiply([1, 2, 3], 2);
    expect(await MathOperations.asyncArrayMultiply([1, 2, 3], 2)).toEqual([
      2, 4, 6,
    ]);
    expect(await MathOperations.asyncArrayMultiply([1, 2, 3], 3)).toEqual([
      3, 6, 9,
    ]);
    expect(await MathOperations.asyncArrayMultiply([1, 2, 3], 0)).toEqual([
      0, 0, 0,
    ]);
  });

  it("Math async maneja errores", async () => {
    await expect(MathOperations.asyncArrayMultiply(null, 2)).rejects.toEqual(
      "Error: No es un arreglo"
    );
  });
});
