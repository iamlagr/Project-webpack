function calcular() {
    let btc = parseFloat(document.getElementById("btc").value);
    let preco = parseFloat(document.getElementById("precoAtual").value);
    let investimento = parseFloat(document.getElementById("investimento").value);

    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(btc) || isNaN(preco)) {
        resultadoDiv.innerHTML = "Preencha os campos obrigatórios!";
        return;
    }

    let valorAtual = btc * preco;

    let resultadoHTML = `
        💰 Quantidade: ${btc} BTC <br>
        📊 Preço atual: R$ ${preco.toFixed(2)} <br>
        <hr>
        💎 Valor atual: R$ ${valorAtual.toFixed(2)}
    `;

    if (!isNaN(investimento)) {
        let lucro = valorAtual - investimento;
        let rentabilidade = (lucro / investimento) * 100;

        let classe = lucro >= 0 ? "positivo" : "negativo";

        resultadoDiv.className = classe;

        resultadoHTML += `
            <br>
            💸 Investimento inicial: R$ ${investimento.toFixed(2)} <br>
            📈 Resultado: R$ ${lucro.toFixed(2)} <br>
            📊 Rentabilidade: ${rentabilidade.toFixed(2)}%
        `;
    } else {
        resultadoDiv.className = "";
    }

    resultadoDiv.innerHTML = resultadoHTML;
}