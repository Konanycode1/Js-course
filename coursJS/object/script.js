// function Mydata(a,b){
//     this.a = a;
//     this.b = b;


//     return {
//         add: ()=> a + b,
//         sous : ()=> a - b,
//         multi : ()=> a * b,
//         divise : () => a / b
//     }
// }
// console.log(Mydata(12,2).add())



function multi(a) {
    let tab = '';
    let chaine = ``
    for (let i = 1; i < 11; i++) {
        tab += i*a + ','
        
    }
    chaine = tab;
    return  chaine 
    
}
console.log(multi(3))