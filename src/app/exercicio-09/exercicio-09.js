function calcular() {
    let conta = parseFloat(document.getElementById("conta").value);
    let porcentagem = parseFloat(document.getElementById("gorjeta").value);
    let pessoas = parseInt(document.getElementById("pessoas").value);

    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(conta) || isNaN(porcentagem)) {
        resultadoDiv.innerHTML = "Preencha os campos obrigatórios!";
        return;
    }

    let valorGorjeta = conta * (porcentagem / 100);
    let total = conta + valorGorjeta;

    let resultadoHTML = `
         Conta: R$ ${conta.toFixed(2)} <br>
         Gorjeta (${porcentagem}%): R$ ${valorGorjeta.toFixed(2)} <br>
        <hr>
         Total: R$ ${total.toFixed(2)}
    `;

    if (!isNaN(pessoas) && pessoas > 0) {
        let porPessoa = total / pessoas;

        resultadoHTML += `
            <br>
             Por pessoa: R$ ${porPessoa.toFixed(2)}
        `;
    }

    resultadoDiv.innerHTML = resultadoHTML;
}