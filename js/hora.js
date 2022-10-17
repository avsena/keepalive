//Atualiza a página automaticamente:
setInterval(() => {

    //Define horário:
    var hora = new Date();

    function fix(digito) {
        if (digito < 10) {
            digito = "0" + digito
        }
        return digito;
    }

    document.querySelector(".hora").innerHTML =
        (fix(hora.getHours()) + ":" + fix(hora.getMinutes()));

   
}, 1000);//segundos definidos para atualizar a página
