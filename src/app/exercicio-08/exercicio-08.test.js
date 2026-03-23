// conversor.test.js
const { converterCelsiusParaKelvin, converterKelvinParaCelsius } = require('./exercicio-08');
describe('Testes de Conversão de Temperatura', () => {

    describe('Celsius para Kelvin', () => {
        test('Deve converter 0°C para 273.15 K (Ponto de congelamento da água)', () => {
            expect(converterCelsiusParaKelvin(0)).toBeCloseTo(273.15);
        });

        test('Deve converter 100°C para 373.15 K (Ponto de ebulição da água)', () => {
            expect(converterCelsiusParaKelvin(100)).toBeCloseTo(373.15);
        });

        test('Deve converter -273.15°C para 0 K (Zero Absoluto)', () => {
            expect(converterCelsiusParaKelvin(-273.15)).toBeCloseTo(0);
        });
    });

    describe('Kelvin para Celsius (Desafio Adicional)', () => {
        test('Deve converter 273.15 K para 0°C', () => {
            expect(converterKelvinParaCelsius(273.15)).toBeCloseTo(0);
        });

        test('Deve converter 373.15 K para 100°C', () => {
            expect(converterKelvinParaCelsius(373.15)).toBeCloseTo(100);
        });

        test('Deve converter 0 K para -273.15°C (Zero Absoluto)', () => {
            expect(converterKelvinParaCelsius(0)).toBeCloseTo(-273.15);
        });
    });

});