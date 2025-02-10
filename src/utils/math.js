export const MathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Error: División por cero"),
  sqrt: (a) => (a >= 0 ? Math.sqrt(a) : "Error: Número negativo"),
  asyncArrayMultiply: async (numbers, multiplier) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!Array.isArray(numbers)) {
          reject("Error: No es un arreglo");
        } else {
          resolve(numbers.map((num) => num * multiplier));
        }
      }, 300);
    });
  },
};
