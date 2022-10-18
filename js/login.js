const usuario = document.querySelector(".input-usuario");
const senha = document.querySelector(".input-senha");
const usuarioSenha = document.querySelector(".usuario-senha");

const userKey = [] = JSON.parse(localStorage.getItem("key")) || [];

function auth() {

    userKey.forEach(user => {
        if (user.userValue == "admin" && user.passwordValue == "admin") {
            window.location.href = "./home.html";
            localStorage.setItem("key", JSON.stringify(userKey));
        } else {
            usuario.classList.add("warning");
            senha.classList.add("warning");
            const error = document.querySelector(".warning-text");
            error.textContent = ("Ops, usuário ou senha inválidos." + "\n" + "Tente novamente!");
        }
    });

}

auth(userKey);

usuarioSenha.addEventListener("submit", (e) => {
    e.preventDefault();

    const userValue = usuario.value;
    const passwordValue = senha.value;

    userKey.push({ userValue, passwordValue });
    auth();
});
