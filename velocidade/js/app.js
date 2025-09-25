function velocidade() {
    let inPermitida = document.getElementById("inPermitida");
    let inCondutor = document.getElementById("inCondutor");
    let outSituacao = document.getElementById("outSituacao");

    let permitida = Number(inPermitida.value);
    let condutor = Number(inCondutor.value);

    if(permitida == 0 || isNaN(permitida)) {
        alert("Preencha o campo.");
        permitida.focus();
        return;
    }

    if(condutor <= permitida) {
      outSituacao.textContent = `Situação: Sem Multa.`;
    }

    if(condutor > permitida && condutor <= permitida * 1.2) {
        outSituacao.textContent = `Situação: Multa leve`;
    }
     if(condutor > permitida * 1.2) {
        outSituacao.textContent = `Situação: Multa grave.`;
     }

    }

    let verificarVelocidade = document.getElementById("verificarVelocidade");
    verificarVelocidade.addEventListener("click",velocidade);