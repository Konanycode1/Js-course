var rebours = document.getElementById('rebours');
var vitesse = document.getElementById('vitesse')
// rebours.style.height = '';
// rebours.style.width  = '';
// var compteur = 0;
// rebours.style.backgroundColor = ''

// setInterval(function decompte(){
//     rebours.style.height =  rebours.style.height ==  '100px' ? '300px' : '100px';
//     rebours.style.width  =   rebours.style.width  == '100px' ? '300px' : '100px';
//     compteur += 1;
//     switch (compteur){
//         case 1 :
//             rebours.style.backgroundColor = 'red';
//             break;
//         case 2 :
//             rebours.style.backgroundColor = 'green'; 
//             break;
//         case 3 :
//             rebours.style.backgroundColor = 'orange';
//             break;
//         case 4 :
//             rebours.style.backgroundColor = 'brown';
//             break;
//         case 5:
//             rebours.style.backgroundColor = 'blue';
//             break;
//         default:
//             compteur = 0;
//             break;
//     }
// }, 500);

// var couleur = {
//     rouge : 'red',
//     bleu : 'blue',
//     vert : 'green',
//     orange : 'orange',
//     marron : 'brown'
// }


//         for(i in couleur){
//             setInterval(function () {
                
                
//             },500)
//         }

let color = ['red','orange','blue','brown', 'green', 'yellow','dark','grey','Cyan','Magenta'];
let inter = null;

vitesse.addEventListener('change', function (e) {
    let data = e.target.value;
    clearInterval(inter)

    inter =  setInterval(function () {

        var gener = Math.floor((Math.random()* 200 + 100));
    
        var generColor = Math.floor((Math.random()* color.length));
    
        rebours.style.backgroundColor = color[generColor];
        rebours.style.height = gener+'px';
        rebours.style.width  = gener +'px';
    
         
    }, parseInt(data) * 100)

    
    
})



   

