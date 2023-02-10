//  exo 1 la somme

// var nbre1 = document.getElementById('nbre1');
// var nbre2 = document.getElementById('nbre2');
// var para  = document.getElementById('para');
// nbre1.addEventListener('input', function (e) {
//     n1 = e.target.value;
//     n2 = nbre2.value;
//     if(n1 !== '' && n2 !== ''){
//         const somme = parseInt(n1) + parseInt(n2);
//         para.textContent = somme;
//     }
//     else{
//         return  para.textContent = 0;
//     }
  
// });
// nbre2.addEventListener('input', function (e) {
//     n2 = e.target.value;
//     n1 = nbre1.value;
//     if(n1 !== '' && n2 !== ''){

//         const somme = parseInt(n1) + parseInt(n2);
        
//         para.textContent = somme;
//     }
//     else{
//         return para.textContent = 0;
//     }
    
// });

//  exo 1 la somme

// var multi = document.getElementById('multi');
// var mydiv = document.getElementById('mydiv');

// multi.addEventListener("input", function (e) {

//     var data = parseInt(e.target.value);


//     for (i = 0; i <= 10; i++){

//         if (data !== ''){
//             var para = document.createElement('p');
//             var muti = data * i
//             var ajout = data +' * '+ i + ' = '+ muti
//             para.innerHTML = ajout
//             mydiv.appendChild(para); 
//         }
//         else if (data === '') {
//             var para = document.createElement('p');
//             para.innerHTML = 'En attend'
//             mydiv.appendChild(para); 
//         }
//         else{
//             return 0;
           
//         }
         
//     }  
// })

// couleur div exo

// var couleur = document.getElementById('couleur');
// var ajoutColor = document.getElementById('ajoutColor');

// couleur.addEventListener('input', function (e) {
//     var data = e.target.value;
//     switch (data) {
//         case 'rouge':
//             ajoutColor.style.backgroundColor = 'red'
//             break;
//         case 'vert':
//             ajoutColor.style.backgroundColor = 'green'
//             break;
//         case 'bleu':
//             ajoutColor.style.backgroundColor = 'blue'
//             break;
//         case 'jaune':
//             ajoutColor.style.backgroundColor = 'yellow'
//             break;
//         case 'noir':
//                 ajoutColor.style.backgroundColor = 'black'
//                 break;
//         case 'gris':
//             ajoutColor.style.backgroundColor = 'grey'
//             break;
//         default:
//             break;
//     }
// })

var larg = document.getElementById('larg');
var valus = document.getElementById('valus');
var card = document.getElementById('card');

larg.addEventListener('input', function (e) {
    card.style.width = e.target.value+'px'
    card.style.height = e.target.value+'px';    
}) 
valus.addEventListener('click', function () {
    valus.addEventListener('change', function () {
        var data = valus.value;
            switch (data) {
                        case 'rouge':
                            card.style.backgroundColor = 'red'
                            break;
                        case 'vert':
                            card.style.backgroundColor = 'green'
                            break;
                        case 'bleu':
                            card.style.backgroundColor = 'blue'
                            break;
                        case 'jaune':
                            card.style.backgroundColor = 'yellow'
                            break;
                        case 'noir':
                            card.style.backgroundColor = 'black'
                            break;
                        case 'gris':
                            card.style.backgroundColor = 'grey'
                            break;
                        default:
                            break;
                    }
    }) 
})















