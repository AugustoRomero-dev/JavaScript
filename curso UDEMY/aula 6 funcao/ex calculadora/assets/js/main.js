 function criaCalculadora() {
    return {
        // Guarda o input da tela da calculadora
        display: document.querySelector('.display'),

        // Limpa o display
        clearDisplay() {
            this.display.value = ''
        },

        // Apaga o último caractere
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        // Faz a conta que está escrita no display
        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                // undefined acontece quando o display está vazio
                if (conta === undefined) {
                    alert('conta invalida')
                    return
                }

                this.display.value = String(conta)
            } catch (error) {
                alert('conta invalida')
                return
            }
        },

        // Liga a calculadora (this = calculadora)
        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        // Escuta o Enter dentro do input
        pressionaEnter() {
            // Arrow function: mantém o this como a calculadora
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        // Escuta os cliques na página inteira
        cliqueBotoes() {
            // bind(this): trava o this como a calculadora
            document.addEventListener('click', function(e) {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if (el.classList.contains('btn-num-Clear')) {
                    this.clearDisplay()
                }
                if (el.classList.contains('btn-num-del')) {
                    this.apagaUm()
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            }.bind(this))
        },

        // Escreve o valor do botão no display
        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()











/////// resolvendo agora com function constructor





function Calculadora(){
    this.display = document.querySelector('.display')



    this.capturaCliques = () =>{
         document.addEventListener('click', e =>{
            const el = e.target

            if(el.classList.contains('btn-num')) this.addNumDisplay(el)
            if(el.classList.contains('btn-num-Clear')) this.clear()
            if(el.classList.contains('btn-num-del')) this.del()
            if(el.classList.contains('btn-eq')) this.igual()
        })
    }

    this.inicia02 = () => {
        this.capturaCliques() 
        this.captruraEnter()

    }

    this.captruraEnter = () =>{
        document.addEventListener('keyup', e =>{
            if(e.keyCode === 13) return
            this.realizaConta()
        })
    }

    this.clear = () => this.display.value = ''
    this.del = () => this.display.value = this.display.value.slice(0, -1)
    this.igual = () =>  {
        try {
            const conta = eval(this.display.value)
            if(!conta) {
                alert('conta invalida')
            }

            this.display.value = conta
        } catch (error) {
           alert('conta invalida') 
           return
        }
    }

   
   
   
   this.addNumDisplay = el => this.display.value += el.innerText
}
const calculadora02 = new Calculadora()
calculadora.inicia02()


/////////////////////////////////////////////


function criaCalculadora02 (){
    this.display =  document.querySelector('.display')

    this.inicia02 = () => {
        this.pegaClique()

    }

    this.pegaClique = () =>{
        document.addEventListener('click', e=>{
            
        })
    }
}







const calculadora03 = new Calculadora03()
calculadora03.inicia02()










