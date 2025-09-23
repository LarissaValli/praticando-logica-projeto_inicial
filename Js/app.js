function farmacia() {
    let inMedicamento = document.getElementById("inMedicamento");
    let inPreco = document.getElementById("inPreco");
    let outMedicamento = document.getElementById("outMedicamento");
    let outPromocao = document.getElementById("outPromocao");

    let medicamento = inMedicamento.value;
    let preco = Number(inPreco.value.replace(",", "."));


    let promocao = (preco * 2);

    outMedicamento.textContent = `Promoção de ${medicamento}`;
    outPromocao.textContent = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`;

}

let btMostrarPromocao = document.getElementById("btMostrarPromocao");
btMostrarPromocao.addEventListener("click", farmacia);