function raizQuadrada() {
    let inNumero = document.getElementById("inNumero");
    let mostrarResultado = document.getElementById("mostrarResultado");

    let numero = Number(inNumero.value);
    let raiz = Math.sqrt(numero);

    if(numero == 0 || isNaN(numero)) {
        alert("Informe um número válido");
        inNumero.focus();
        return;
    }

    if(raiz == Math.floor(raiz)) {
        mostrarResultado.textContent = `A raiz quadrada é ${raiz}`;
    } else {
        mostrarResultado.textContent = `Não há raiz exata para ${numero}`;
    }
}

let inExibir = document.getElementById("inExibir");
inExibir.addEventListener("click", raizQuadrada);