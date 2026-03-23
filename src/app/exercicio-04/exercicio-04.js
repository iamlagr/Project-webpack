const calcularLucro = (custo, venda) => {
    const lucroObtido = venda - custo;
    
    const margemLucro = custo > 0 ? (lucroObtido / custo) * 100 : 0;

    return {
        custo,
        venda,
        lucroObtido,
        margemLucro
    };
};

const realizarCalculoLucro = () => {
    const inputCusto = document.getElementById('custoAquisicao');
    const inputVenda = document.getElementById('precoVenda');
    const display = document.getElementById('resultado');

    const custo = parseFloat(inputCusto.value);
    const venda = parseFloat(inputVenda.value);

    if (isNaN(custo) || isNaN(venda)) {
        display.innerHTML = "Insira valores numéricos válidos.";
        return;
    }

    const res = calcularLucro(custo, venda);

    display.innerHTML = `
        <p>Custo de Aquisição: R$ ${res.custo.toFixed(2)}</p>
        <p>Preço de Venda: R$ ${res.venda.toFixed(2)}</p>
        <hr>
        <p><strong>Lucro Obtido: R$ ${res.lucroObtido.toFixed(2)}</strong></p>
        <p>Margem de Lucro: <span style="color: ${res.margemLucro >= 0 ? 'blue' : 'red'}">
            ${res.margemLucro.toFixed(2)}%
        </span></p>
    `;
};