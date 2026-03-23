const calcularRentabilidade = (valorInicial, valorAtual, meses = 1) => {
    const lucroObtido = valorAtual - valorInicial;
    const rentabilidadeTotal = (lucroObtido / valorInicial) * 100;

    const rentabilidadeAnualizada = meses > 0 ? (rentabilidadeTotal / meses) * 12 : 0;

    return {
        valorInicial,
        valorAtual,
        lucroObtido,
        rentabilidadeTotal,
        rentabilidadeAnualizada,
        meses
    };
};

const realizarCalculoRentabilidade = () => {
    const vInicial = parseFloat(document.getElementById('valorInicial').value);
    const vAtual = parseFloat(document.getElementById('valorAtual').value);
    const tempoMeses = parseInt(document.getElementById('tempoAplicacao').value) || 0;
    const display = document.getElementById('resultado');

    if (isNaN(vInicial) || isNaN(vAtual) || vInicial <= 0) {
        display.innerHTML = "Insira valores válidos (Valor inicial deve ser maior que 0).";
        return;
    }

    const res = calcularRentabilidade(vInicial, vAtual, tempoMeses);

    display.innerHTML = `
        <p>Valor Inicial: R$ ${res.valorInicial.toFixed(2)}</p>
        <p>Valor Atual: R$ ${res.valorAtual.toFixed(2)}</p>
        <p>Lucro Obtido: <span style="color: ${res.lucroObtido >= 0 ? 'green' : 'red'}">
            R$ ${res.lucroObtido.toFixed(2)}
        </span></p>
        <p>Rentabilidade Total: <strong>${res.rentabilidadeTotal.toFixed(2)}%</strong></p>
        ${res.meses > 0 ? `<p>Rentabilidade Anualizada: <strong>${res.rentabilidadeAnualizada.toFixed(2)}% ao ano</strong></p>` : ''}
    `;
};