
const sair = document.querySelector("#sair");

sair.addEventListener("click", () => {

    if(confirm("Você tem certeza? Sair da conta irá remover todos os seus dados do LocalStorage. Deseja continuar?") == true) {
        
        window.location.href = "../login.html";
        localStorage.clear();
    }

});
