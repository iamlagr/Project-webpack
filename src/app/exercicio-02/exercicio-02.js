const calcularSalarioFinal = (salarioBase, percentualBonus) => {
    const valorBonus = salarioBase * (percentualBonus / 100);
    const salarioFinal = salarioBase + valorBonus;
    
    const aumentoPercentual = percentualBonus; 

    return {
        salarioBase,
        percentualBonus,
        valorBonus,
        salarioFinal,
        aumentoPercentual
    };
};


const realizarCalculoSalario = () => {
    const inputSalario = document.getElementById('salarioBase');
    const inputBonus = document.getElementById('percentualBonus');
    const areaResultado = document.getElementById('resultado');

    const salarioBase = parseFloat(inputSalario.value);
    const bonus = parseFloat(inputBonus.value);

    if (isNaN(salarioBase) || isNaN(bonus)) {
        areaResultado.innerHTML = "<p style='color:red'>Por favor, insira valores válidos.</p>";
        return;
    }

    const resultado = calcularSalarioFinal(salarioBase, bonus);

    areaResultado.innerHTML = `
        <p>Salário Base: <strong>R$ ${resultado.salarioBase.toFixed(2)}</strong></p>
        <p>Bônus Aplicado: <strong>${resultado.percentualBonus}%</strong></p>
        <p>Valor do Bônus: <span style="color: green">R$ ${resultado.valorBonus.toFixed(2)}</span></p>
        <hr>
        <p><strong>Salário Final: R$ ${resultado.salarioFinal.toFixed(2)}</strong></p>
        <p><small>Aumento percentual total: ${resultado.aumentoPercentual}%</small></p>
    `;
};

window.realizarCalculoSalario = realizarCalculoSalario;