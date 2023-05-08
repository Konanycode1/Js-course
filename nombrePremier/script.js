function somPremier(nombre) {
    if(nombre < 2)return 0
    let array = new Array(nombre).fill("a");
    let isPremier = !array.find((value,index)=> index > 1 && nombre%index === 0);
    console.log(nombre,isPremier) 
    return (isPremier?nombre:0)+ somPremier(nombre -1)
   
}

console.log(somPremier(10))