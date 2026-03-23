const calcularCustoViagem = (distancia, consumo, precoLitro) => {
  
    const litrosNecessarios = distancia / consumo;
    const custoTotal = litrosNecessarios * precoLitro;

    const litrosIdaVolta = litrosNecessarios * 2;
    const custoIdaVolta = custoTotal * 2;

    return {
        distancia,
        consumo,
        precoLitro,
        litrosNecessarios,
        custoTotal,
        litrosIdaVolta,
        custoIdaVolta
    };
};

const realizarCalculoViagem = () => {
    const dist = parseFloat(document.getElementById('distancia').value);
    const cons = parseFloat(document.getElementById('consumo').value);
    const preco = parseFloat(document.getElementById('precoLitro').value);
    const display = document.getElementById('resultado');

    if (isNaN(dist) || isNaN(cons) || isNaN(preco) || cons <= 0) {
        display.innerHTML = "Por favor, insira valores válidos (Consumo deve ser > 0).";
        return;
    }

    const res = calcularCustoViagem(dist, cons, preco);

    display.innerHTML = `
        <p>Distância: ${res.distancia} km</p>
        <p>Consumo Médio: ${res.consumo} km/L</p>
        <p>Combustível necessário: <strong>${res.litrosNecessarios.toFixed(2)} L</strong></p>
        <p>Custo estimado (SÓ IDA): <strong>R$ ${res.custoTotal.toFixed(2)}</strong></p>
        <hr>
        <p><strong>IDA E VOLTA:</strong></p>
        <p>Combustível: ${res.litrosIdaVolta.toFixed(2)} L</p>
        <p>Custo Total: <span style="color: green; font-weight: bold;">R$ ${res.custoIdaVolta.toFixed(2)}</span></p>
    `;
};
