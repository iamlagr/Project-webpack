// exercicio-10.test.js
const { 
    calcularValorEmReais, 
    calcularLucroPrejuizo, 
    calcularRentabilidadePercentual 
} = require('./exercicio-10');

describe('Testes de Cálculo de Investimento em Moeda Estrangeira', () => {

    describe('Requisito Principal: Conversão Básica', () => {
        test('Deve converter $100 dólares a uma taxa de R$5.00 para R$500.00', () => {
            expect(calcularValorEmReais(100, 5.00)).toBeCloseTo(500.00);
        });

        test('Deve converter €50 euros a uma taxa de R$5.50 para R$275.00', () => {
            expect(calcularValorEmReais(50, 5.50)).toBeCloseTo(275.00);
        });
    });

    describe('Desafio: Lucro ou Prejuízo em Reais', () => {
        test('Deve retornar lucro de R$50 se comprou $100 a R$4.50 e agora está R$5.00', () => {
            // Valor pago: 450 | Valor atual: 500 | Lucro: 50
            expect(calcularLucroPrejuizo(100, 4.50, 5.00)).toBeCloseTo(50.00);
        });

        test('Deve retornar prejuízo de R$-50 se comprou $100 a R$5.50 e agora está R$5.00', () => {
            // Valor pago: 550 | Valor atual: 500 | Prejuízo: -50
            expect(calcularLucroPrejuizo(100, 5.50, 5.00)).toBeCloseTo(-50.00);
        });

        test('Deve retornar R$0 se a taxa não mudou', () => {
            expect(calcularLucroPrejuizo(100, 5.00, 5.00)).toBeCloseTo(0);
        });
    });

    describe('Desafio: Rentabilidade Percentual', () => {
        test('Deve retornar rentabilidade de 25% se a taxa subiu de R$4.00 para R$5.00', () => {
            expect(calcularRentabilidadePercentual(4.00, 5.00)).toBeCloseTo(25.00);
        });

        test('Deve retornar rentabilidade negativa de -20% se a taxa caiu de R$5.00 para R$4.00', () => {
            expect(calcularRentabilidadePercentual(5.00, 4.00)).toBeCloseTo(-20.00);
        });

        test('Deve retornar rentabilidade de 0% se a taxa permaneceu a mesma', () => {
            expect(calcularRentabilidadePercentual(5.20, 5.20)).toBeCloseTo(0);
        });
    });

});