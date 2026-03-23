function calcular() {
    let s0 = parseFloat(document.getElementById("posicaoInicial").value);
    let v = parseFloat(document.getElementById("velocidade").value);
    let t = parseFloat(document.getElementById("tempo").value);

    if (isNaN(s0) || isNaN(v) || isNaN(t)) {
        document.getElementById("resultado").innerHTML = "Preencha todos os campos!";
        return;
    }

    let s = s0 + v * t; // posição final
    let distancia = Math.abs(v * t); // desafio opcional

    document.getElementById("resultado").innerHTML = `
        Posição inicial: ${s0} m <br>
        Velocidade: ${v} m/s <br>
        Tempo: ${t} s <br>
        <hr>
        Posição final: ${s} m <br>
        Distância percorrida: ${distancia} m
    `;
}