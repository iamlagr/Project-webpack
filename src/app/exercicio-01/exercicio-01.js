// Função principal de cálculo
function calcularDesconto(preco, percentual) {
    const valorDescontado = preco * (percentual / 100);
    const precoFinal = preco - valorDescontado;
    
    return {
        valorDescontado: valorDescontado,
        precoFinal: precoFinal
    };
}

function realizarCalculo() {
    const precoInput = document.getElementById('precoOriginal').value;
    const descontoInput = document.getElementById('percentualDesconto').value;
    const areaResultado = document.getElementById('resultado');

    const precoOriginal = parseFloat(precoInput);
    const percentual = parseFloat(descontoInput);

    if (isNaN(precoOriginal) || isNaN(percentual)) {
        areaResultado.innerHTML = "<p style='color:red'>Por favor, preencha valores válidos.</p>";
        return;
    }

    const resultados = calcularDesconto(precoOriginal, percentual);

    areaResultado.innerHTML = `
        <p>Preço Original: <strong>R$ ${precoOriginal.toFixed(2)}</strong></p>
        <p>Desconto Aplicado: <strong>${percentual}%</strong></p>
        <p>Valor Descontado: <span class="destaque">R$ ${resultados.valorDescontado.toFixed(2)}</span></p>
        <p>Preço Final: <strong>R$ ${resultados.precoFinal.toFixed(2)}</strong></p>
        <hr>
        <p><em>Você economizou: R$ ${resultados.valorDescontado.toFixed(2)}!</em></p>
    `;
}

