
// let numbers = prompt("Veuillez entrer trois nombres séparés par des espaces");
//     let tab = numbers.split(" ");
    
//     //if (tab.length === 3 && (tab.every((a) => !isNaN(a))))
//     console.log( "ok"+ tab.join("")) 
//      if(tab.length === 3 && !isNaN(tab.join("")))
//     {
//         console.log( tab)
//         tab[0] = parseInt(tab[0]), tab[1] = parseInt(tab[1]), tab[2] = parseInt(tab[2]);
        
//         let discriminant = (tab[1] ** 2) - 4 * tab[0] * tab[2];
//         if (discriminant >= 0){
//             let racineDiscriminant = Math.sqrt(discriminant);
//             let solution1 = (-tab[1] - racineDiscriminant) / (2 * tab[0]), solution2 = (-tab[1] + racineDiscriminant) / (2 * tab[0]);
//                 if(discriminant == 0){
//                     alert(`Il existe une unique solution qui est ${solution1}`)
//                 }
//                 else if(discriminant > 0){
//                     alert(`Il existe deux solutions qui sont ${solution1} et ${solution2}`)
//                 }
//         }
//        else alert(`Il n'y a pas de solutions`)
//     }
//     else alert("Veuillez mettre exactement trois nombres séparés d'un espace")