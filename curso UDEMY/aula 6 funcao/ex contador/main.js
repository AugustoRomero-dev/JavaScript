function Contador(){
    this.inicia = ()=>{
        this.pegaClique()
    }

    this.pegaClique = () =>{
        document.addEventListener('click', e=>{
            const el = e.target

            if(el.classList.contains === 'btn btn-mais') this.addNum()
            if(el.classList.contains === "btn btn-menos") this.tiraNum()
            if(el.classList.contains === "btn btn-zero") this.clear()
        })
    }

    this.clear = () =>{
        
    }
}

const contadora = new Contador()
Contador.inicia()