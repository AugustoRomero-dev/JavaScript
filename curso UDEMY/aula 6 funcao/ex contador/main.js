function Contador01(){
    

    this.numero = document.querySelector(".numero")
    this.valor = 0

    this.inicia = ()=>{
        this.pegaClique()
        this.mudaCor()
        this.setinha()
    }

    this.pegaClique = () =>{
        document.addEventListener('click', e=>{
            const el = e.target

            if(el.classList.contains('btn-btn-mais')) this.addNum()
            if(el.classList.contains("btn-btn-menos")) this.tiraNum()
            if(el.classList.contains("btn-btn-zero")) this.clear()
        })
    }

    this.clear = () =>{
       
        this.valor = 0
        this.numero.innerText = this.valor
        this.mudaCor()
    }

    this.tiraNum = () =>{
        this.valor --
         this.numero.innerText = this.valor
         

         if(this.valor < 0){
            alert("Sem numeros negativos")
            this.clear()
         }
         this.mudaCor()
    }

    this.addNum = () =>{
        this.valor ++
        this.numero.innerText = this.valor
        this.mudaCor()
    }

    this.mudaCor = () =>{
        if(this.valor === 0) this.numero.style.color = "red"
        if(this.valor > 0) this.numero.style.color = "green"
    }
    this.setinha = ()=>{
        document.addEventListener("keyup", e=>{
            if (e.keyCode === 38 ) this.addNum()
            if (e.keyCode === 40) this.tiraNum()

        })
    }
}

const contadora = new Contador01()
contadora.inicia()