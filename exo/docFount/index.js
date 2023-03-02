// let quest = confirm("Avez-vous plus de 18 ans");
// if (quest == true) {
//   let nbr = prompt("entrer un nombre compris de 1 à 10 ");
//   if (parseInt(nbr) >= 1 && parseInt(nbr) <= 11) {
//     if (parseInt(nbr) % 2 == 0) {
//       let verif = prompt(`entrer un nombre compris entre 1 et ${nbr}`);
//       if(parseInt(verif) % 3 == 0 && verif >=1 && verif <= verif ){
//         alert("vous avez gagnez");
//       }
//       else{
//         alert("perdu cupidon")
//       }
//     } else {
//       alert("Dommage cupidon");
//     }
//   } else {
//     alert("nombre non autorisé cupidon");
//   }
// } else {
//   alert("vous n'etes pas autorisé");
// }

// let rep = prompt("Entrer un nombre")

// if(parseInt(rep) % 2 == 0 && parseInt(rep) % 5 == 0 || parseInt(rep) % 3 == 0 && parseInt(rep) % 9 == 0 ){
//   alert("Vous avez gagnez")
// }
// else{
//     alert("vous avez perdu");
// }

// try {
//   console.log("hello world!!");

//   functionAjout();
// } catch (error) {
//   console.log("erreur" + error)
  
// }
// finally{
//   console.log("merci pour les erreur");
// }

let por = document.querySelectorAll(".por")

  setTimeout(slic(), 1000)


function slic() {
  por.forEach(element =>{
    setTimeout(()=>{
      element.style.opacity = 1 
    }, 100)
         
  })
}

