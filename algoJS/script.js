// const inpNom = $("#nom");
// const inpPre = $("#prenom");
// const add = $(".add");
// const btn = $(".btn");
// let count = 0

// inpNom.css("background-color","red");
// inpPre.css("background-color", "blue")

// btn.click(function () {
//     add.html(pileFace())
    
// })


function pileFace() {
    const  random = Math.floor(Math.random() * 2)
    return (random >= 1)?"face":"pile";
}
// $(".val").add("p"[1]).css("color", "blue")

let readline = require("readline-sync");



// Categorie()
// function Categorie() {
//     const entre = readline.question('Entre votre age ?  ')

//     const result = (entre < 7 )? "petit": (entre > 6 && entre <= 15)? "moyen": "grand";
//    console.log(result)    
// }

// let resutl = 1

// function facto(){
    
//     let  enter = readline.question("enter");

//     for(let i = 1; i<= enter; i++){
//         resutl *= i
        
//     }
//     console.log(`factoriel de ${enter}  est:` +resutl);
// }

// facto()

function addi(t) {
    let resut = 0;
    for (let i = 0; i < t.length; i++) {
        if(t[i] % 2 === 0){
            resut += t[i];  
        } 
    }
    return resut
}
tab =[2,6,10,3,8,7,20]
console.log(addi(tab))