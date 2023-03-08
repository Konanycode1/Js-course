
// let nb = 10;
// console.log(nb);

// console.log(calcul(8)); 
// function calcul(nbr) {
//     let result = nbr*2
//     return result;
// }
// let tableau = [1,2,3,4,5,6];
// console.log(tableau[0]);
// pays = {
//     nom: "japan",
//     popu: 200000,
//     classement: 3,
//     PIB: 345859,
//     maMethode: function () {
//         console.log("ma methode")
//     }
// }
//  console.log(pays.nom)
//  let titre = document.querySelector("h1");
//  function couleur(clr) {
//     titre.style.background = clr;
//  }
//  couleur("white");
//  titre.addEventListener("click",couleur("red"));

const myObjt = {
    prenom: "konan",
    presenetation: function () {
        console.log(this)
        
    }
    }
 myObjt.presenetation();

 function foo() {
    
    console.log(this)
 }
 foo();