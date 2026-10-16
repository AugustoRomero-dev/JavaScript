 function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn btn-num-Clear'),

        inicia() {
            // this = calculadora, porque foi chamado como calculadora.inicia()
            this.cliqueBotoes()
            this.pressionaEnter()
           
        },
        clearDisplay(){
            this.display.value = ''
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },
        realizaConta(){
           let conta = this.display.value;

           try {
                conta = eval(conta)

                if(!conta){
                    alert('conta invalida')
                    return;
                }

                this.display.value = String(conta);
           } catch (error) {
                alert('conta invalida')
                return
           }
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
            }) 
        },

        // Método que escuta os cliques na página
        cliqueBotoes() {
            // bind(this): mantém o this como sendo a calculadora
            document.addEventListener('click', function(e) {
                const el = e.target   // elemento que foi clicado

                // Se o elemento clicado tem a classe 'btn-num'
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-num-Clear')) {
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-num-del')){
                    this.apagaUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            }.bind(this));
        },

        // Método que vai colocar o número do botão no display
        btnParaDisplay(valor) {
            this.display.value += valor 
        }
    }
}

// Cria o objeto calculadora
const calculadora = criaCalculadora()
// Chama inicia(): aqui o this passa a ser "calculadora"
calculadora.inicia()