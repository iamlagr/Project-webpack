
function converterCelsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

function converterKelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
}


if (typeof document !== 'undefined') {
    const inputTemperatura = document.getElementById('valorTemperatura');
    const selectConversao = document.getElementById('tipoConversao');
    const botaoConverter = document.getElementById('botaoConverter');
    const displayResultado = document.getElementById('resultado');

    botaoConverter.addEventListener('click', () => {
        const valorDigitado = parseFloat(inputTemperatura.value);

        
        if (isNaN(valorDigitado)) {
            displayResultado.textContent = "Por favor, insira um número válido.";
            displayResultado.style.color = "red";
            return;
        }

        displayResultado.style.color = "#28a745"; 
        const tipo = selectConversao.value;
        let resultadoCalculado = 0;
        let simboloResultado = '';

        
        if (tipo === 'celsiusParaKelvin') {
            resultadoCalculado = converterCelsiusParaKelvin(valorDigitado);
            simboloResultado = 'K';
        } else if (tipo === 'kelvinParaCelsius') {
            resultadoCalculado = converterKelvinParaCelsius(valorDigitado);
            simboloResultado = '°C';
        }

        
        displayResultado.textContent = `${resultadoCalculado.toFixed(2)} ${simboloResultado}`;
    });
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        converterCelsiusParaKelvin,
        converterKelvinParaCelsius
    };
}