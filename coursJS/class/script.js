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
    setPays(popu, ville, pibi){
        this.pop = popu;
        this.nom = ville;
        this.pib = pibi;
    }
}

const france = new pays(70,'france', 2000)

console.log(france.setPays(150, "Paris", 5000))