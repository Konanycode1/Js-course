class pays {
    constructor (pop, nom, pib){
        this.pop = pop;
        this.nom = nom;
        this.pib = pib;
    }

    showpop(){
        console.log(this.pop)
    }
    getPays(){
        return `le pays est ${this.nom} et a pour polution ${this.pop} et un PIB ${this.pib}`
    }

}

const france = new pays(70,'france', 2000)

console.log(france.getPays())