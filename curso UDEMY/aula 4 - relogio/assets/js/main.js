function criandoTimer (segundos){
    const agora = new Date(segundos * 1000);
    // CORREÇÃO: Mudado de toDateString para toLocaleTimeString
    return agora.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.getElementById('relogio');
const iniciar = document.getElementById('Iniciar'); // Corrigido a variável de 'inicar' para 'iniciar'
const pausar = document.getElementById('Pausar');
const zerar = document.getElementById('Zerar');

let segundos = 0;
let timer; // CORREÇÃO: Variável criada fora para ser acessada por todas as funções

function iniciarRelogio(){
   
    
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criandoTimer(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function (event) {
    iniciarRelogio();
});

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
   
});

zerar.addEventListener('click', function (event) {
    clearInterval(timer); // Para o relógio
    segundos = 0
    relogio.innerHTML = '00:00:00'; // Reseta o texto visual
    
});

