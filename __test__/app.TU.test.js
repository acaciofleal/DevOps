var somar = require('../app.js');
var subtracao = require('../Calculadora/subtracao');
var multiplicacao = require('../Calculadora/multiplicacao');
var divisao = require('../Calculadora/divisao');


describe('Testes da Calculadora', () => {

    test('Este teste deve retornar o valor correto de uma soma', () => {
      expect(somar(1, 2)).toBe(3);
    });

    test('Este teste deve retornar o valor correto de uma subtracao', () => {
        expect(subtracao(5, 2)).toBe(3);
      });

    test('Este teste deve retornar o valor correto de uma multiplicacao', () => {
        expect(multiplicacao(2, 3)).toBe(6);
    });

    test('Este teste deve retornar o valor correto de uma divisao', () => {
        expect(divisao(9, 3)).toBe(3);
      });
})
