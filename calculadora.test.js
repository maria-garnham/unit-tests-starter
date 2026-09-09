const {
  subtrai,
  multiplica,
  divide,
  ehPar,
  raiz,
  media,
  soma,
} = require("./calculadora");

describe("soma", () => {
  test("Soma com dois números positivos", () => {
    expect(soma(2, 3)).toBe(5);
  });
});

describe("raiz", () => {
  test("Calcula a raiz de numero nao exato com precisao", () => {
    expect(raiz(2)).toBeCloseTo(1.414);
  });

  test("Lançar erro para numero negativo", () => {
    expect(() => raiz(-4)).toThrow(
      "Nao e possivel calcular raiz de numero negativo",
    );
  });






  describe("subtrai", () => {
    test("Deve retornar o resultado correto da subtração", () => {
      expect(subtrai(10, 5)).toBe(5);
    });
    test("Deve retornar um número negativo quando o resultado for negativo", () => {
      expect(subtrai(5, 10)).toBe(-5);
    });
  });





  describe("multiplica", () => {
    test("Deve retornar o produto correto de dois números", () => {
      expect(multiplica(5, 4)).toBe(20);
    });
    test("Deve retornar 0 quando um dos fatores for 0", () => {
      expect(multiplica(5, 0)).toBe(0);
    });
    test("O resultado deve ser maior do que cada um dos fatores individualmente", () => {
      expect(multiplica(3, 4)).toBe(12);
    });
  });




  describe("divide", () => {
    test("Deve retornar o resultado correto da divisão", () => {
      expect(divide(10, 2)).toBe(5);
    });
    test("Deve lançar o erro quando b for 0", () => {
      expect(() => divide(10, 0)).toThrow("Nao e possivel dividir por zero");
    });
  });




  describe("ehPar", () => {
    test("Deve retornar um valor verdadeiro para número par", () => {
      expect(ehPar(4)).toBe(true);
    });
    test("Deve retornar um valor falso para número ímpar", () => {
      expect(ehPar(5)).toBe(false);
    });
  });





  describe("media", () => {
    test("Deve calcular corretamente a média de uma lista de inteiros", () => {
      expect(media([10, 20, 30])).toBe(20);
    });
    test("Deve calcular corretamente a média quando o resultado for decimal", () => {
      expect(media([5, 6])).toBe(5.5);
    });
    test("Deve lançar erro quando a lista estiver vazia", () => {
      expect(() => media([])).toThrow();
    });
    test("Deve lançar erro quando o argumento não for um array", () => {
      expect(() => media(10)).toThrow();
    });
  });


  
});
