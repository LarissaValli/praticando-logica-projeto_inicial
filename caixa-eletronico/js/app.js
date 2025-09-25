function caixaEletronico() {
    let inSaque = document.getElementById("inSaque");
    let resultado1 = document.getElementById("resultado1");
    let resultado2 = document.getElementById("resultado2");
    let resultado3 = document.getElementById("resultado3");

    let saque = Number(inSaque.value);
    let notaCem = Math.floor(saque / 100);
    let resto = saque % 100;
    let notaCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    let notaDez = Math.floor(saque / 10);

    if(saque == 0 || isNaN(saque)) {
        alert("Preencha o campo vazio!");
        saque.focus();
        return;
    }

    if(notaCem > 0) {
        resultado1.textContent = `Notas de R$: 100,00: ${notaCem}`;
    } else {
        resultado1.textContent = `Não disponivel`;
    }

    if(notaCinquenta > 0) {
        resultado2.textContent = `Notas de R$: 50,00: ${notaCinquenta}`;
    } else {
        resultado2.textContent = `Não disponível`;
    }

    if(notaDez > 0) {
        resultado3.textContent = `Notas de R$: 10,00: ${notaDez}`;
    } else{ 
        resultado3.textContent = `Não disponível`;
    }
}

let btSaque = document.getElementById("btSaque");
btSaque.addEventListener("click", caixaEletronico);