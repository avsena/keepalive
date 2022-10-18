let segundos = 15;
const timer = document.querySelector('.timer');

let duracao = setInterval(() => {
    (function countdown(){
        if(segundos > 0) {
            segundos--;
            timer.innerHTML = segundos;
        } else {
            
            if(confirm('Deseja permanecer conectado?') == true) {
                clearInterval(duracao);
                location.reload();
            } else {
                clearInterval(duracao);
                window.location.href = './login.html';
                localStorage.clear();
            }
            
        }
    }())
},1000)
