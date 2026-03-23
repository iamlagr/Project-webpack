// --- FUNÇÕES MATEMÁTICAS (Lógica de Negócio) ---
function calcularValorEmReais(valorInvestido, taxaAtual) {
    return valorInvestido * taxaAtual;
}

function calcularLucroPrejuizo(valorInvestido, taxaCompra, taxaAtual) {
    const valorPagoNaCompra = valorInvestido * taxaCompra;
    const valorAtual = valorInvestido * taxaAtual;
    return valorAtual - valorPagoNaCompra;
}

function calcularRentabilidadePercentual(taxaCompra, taxaAtual) {
    return ((taxaAtual / taxaCompra) - 1) * 100;
}

// --- INTERAÇÃO COM A TELA (DOM) ---
if (typeof document !== 'undefined') {
    const btnCalcular = document.getElementById('btnCalcular');

    btnCalcular.addEventListener('click', () => {
        // Captura os valores dos inputs
        const valorInvestido = parseFloat(document.getElementById('valorInvestido').value);
        const taxaAtual = parseFloat(document.getElementById('taxaAtual').value);
        const taxaCompraInput = document.getElementById('taxaCompra').value;

        // Validação simples
        if (isNaN(valorInvestido) || isNaN(taxaAtual)) {
            alert("Por favor, preencha corretamente o Valor Investido e a Taxa Atual.");
            return;
        }

        // Mostra a área de resultados
        document.getElementById('areaResultado').style.display = 'block';

        // Requisito Principal
        const valorEmReais = calcularValorEmReais(valorInvestido, taxaAtual);
        document.getElementById('resValorInvestido').textContent = valorInvestido.toFixed(2);
        document.getElementById('resTaxaAtual').textContent = taxaAtual.toFixed(2);
        document.getElementById('resValorReais').textContent = valorEmReais.toFixed(2);

        // Desafio Adicional (Opcional)
        const divDesafio = document.getElementById('resultadoDesafio');
        
        if (taxaCompraInput !== "") {
            const taxaCompra = parseFloat(taxaCompraInput);
            
            // Cálculos
            const lucroPrejuizo = calcularLucroPrejuizo(valorInvestido, taxaCompra, taxaAtual);
            const rentabilidade = calcularRentabilidadePercentual(taxaCompra, taxaAtual);
            
            // Exibição
            divDesafio.style.display = 'block';
            const spanLucroPrejuizo = document.getElementById('resLucroPrejuizo');
            const spanRentabilidade = document.getElementById('resRentabilidade');
            
            spanLucroPrejuizo.textContent = lucroPrejuizo.toFixed(2);
            spanRentabilidade.textContent = rentabilidade.toFixed(2);

            // Cores: Verde para lucro/positivo, Vermelho para prejuízo/negativo
            if (lucroPrejuizo >= 0) {
                spanLucroPrejuizo.className = 'lucro';
                spanRentabilidade.className = 'lucro';
            } else {
                spanLucroPrejuizo.className = 'prejuizo';
                spanRentabilidade.className = 'prejuizo';
            }

        } else {
            // Esconde a parte do desafio se a taxa de compra não foi preenchida
            divDesafio.style.display = 'none';
        }
    });
}

// --- EXPORTAÇÃO PARA OS TESTES (Jest) ---
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calcularValorEmReais,
        calcularLucroPrejuizo,
        calcularRentabilidadePercentual
    };
}