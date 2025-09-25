function parOuImpar() {
    let inNumero = document.getElementById("inNumero");
    let outResultado = document.getElementById("outResultado");

    let numero = Number(inNumero.value);

    if(numero % 2 === 0) {
        outResultado.textContent = `Resposta: ${numero} é par.`;
    } else {
        outResultado.textContent = `Resposta: ${numero} é ímpar.`;
    }
}
    let btVerificar = document.getElementById("btVerificar");
    btVerificar.addEventListener("click", parOuImpar);

    // if(numero == par) {
    //     outResultado.textContent = `Resposta: ${par} é par.`;
    // } else {
    //     outResultado.textContent = `Resposta: Não é par`;
    // }

    // if(numero == impar) {
    //     outResultado.textContent = `Resposta: ${impar} é ímpar`;
    // } else {
    //     outResultado.textContent = `Resposta: Não é impar`;
    // }
