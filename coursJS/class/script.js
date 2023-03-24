// class Humain {
//     constructor (nom, prenom, age ){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//     }

//     getPoids(){
//         this.poids = 140 
//     }
//     getTailles(){
//         this.taille = 1,45
//     }
// }

// let person =  new Humain(200, 1,75);
//  console.log(person.getTailles)

//  let promise = new Promise((resolve, reject) =>{
//     resolve("hello my letter is back");
//  })
//  .then(value =>{
//     console.log(value)
//  })

//  console.log(promise)


// const foo = ()=>5;
// const foo = ()=>{return 5}
// console.log(foo())

// let x = 2;
// const add1 = y => x += y;
// console.log(x);
// add1(5)
// console.log(x)

// const add2 = (a,b) => a + b;
// console.log(add2(2,5))

// function forEchaFoun(tab, callback) {
//     for (let i = 0; i < tab.length; i++) {
//         callback(tab[i]);  
//     } 
// }

// let data = [1,2,3,4,5,6,7]
// forEchaFoun(data, (item)=>{
//     console.log(item)
// })



// function FuncFilter(tab, funct) {
//     const filtered = [];
    
//      for (let i = 0; i < tab.length; i++) {     
//         if(funct(tab[i])){
//             filtered.push(tab[i])
//         }
//      }
//     return filtered; 
// }
// const filtre = FuncFilter(data, el =>el > 2);
// console.log(filtre)


(function () {
    console.log("ok")
    
})();

// la recursion


// const multi = (a,b) => a*b;
// console.log(multi(5,2))
// let data = [1,2,3,4,5,6,7]
// function Callfunc(mytab, callback){
//     let recup = [];
//     for (let i = 0; i < mytab.length; i++) {
//         if(callback(mytab[i])) {
//             recup.push(mytab[i]+1);
//         } 
//     }
//     return recup;
// }
// let ajout = Callfunc(data, el => el );
// console.log(ajout)


// function retour(tab, func) {
//     const newTab = [];
//     for(let i = 0; i < tab.length; i++){
//         newTab.push(func(tab[i]));
//     }
//     return newTab;
// }
// const plusUn = nb => nb+1;
// console.log(retour(data, plusUn))

// console.log(Math.ceil((Math.random()* (1000 -200) + 200 )))

let myPhrase = "Bonjours, je suis nanien de la promotion 6.23 et toi ";
 const regex = new RegExp(/[A-Z]/g)
 console.log(myPhrase.match(regex));

let email = "contact@johndoe.fr";
const regexp = new RegExp(/johndoe.[a-z]{2,3}/g)
console.log(email.match(regexp));

let verif = "+225 0708889205";
const reg = new RegExp('#(0|+225)[1-9]( *[0-9]{2}){4}#')
console.log(verif.match(reg))