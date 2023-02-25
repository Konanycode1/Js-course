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

let data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]


// data.forEach(elem => {
//  console.log(elem);
// })



// function puissance(x,n) {
//   let total = 1;
//   for (let i = 1; i <= n; i++) {
//     total *= x;
    
//   }
//   return total;
// }


// console.log(puissance(2,1))



