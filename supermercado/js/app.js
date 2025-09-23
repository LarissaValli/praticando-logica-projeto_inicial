function superMercado() {
    let inProduto = document.getElementById("inProduto");
    let inPreco = document.getElementById("inPreco");
    let outPromocao = document.getElementById("outPromocao");
    let outProduto = document.getElementById("outProduto");

    let produto = inProduto.value;
    let preco = Number(inPreco.value.replace(",", "."));

    let promocao = preco / 2;
    let total = preco * 2 + promocao;

    outPromocao.textContent = `${produto} - Promoção Leve 3 por R$: ${total}`;
    outProduto.textContent = `O 3° produto custa apenas R$: ${promocao}`
}

let inPromocao = document.getElementById("inPromocao");
inPromocao.addEventListener("click", superMercado);