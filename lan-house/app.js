function lanHouse() {
    let inValor = document.getElementById("inValor");
    let inTempo = document.getElementById("inTempo");
    let outValor = document.getElementById("outValor");

    let valor = Number(inValor.value.replace(",", "."));
    let tempo = Number(inTempo.value);

    let calculo = (tempo / 15) * 2;

    outValor.textContent = `Valor a pagar R$: ${calculo.toFixed(2)}`;

}

let btValorAPagar = document.getElementById("btValorAPagar");
btValorAPagar.addEventListener("click", lanHouse);