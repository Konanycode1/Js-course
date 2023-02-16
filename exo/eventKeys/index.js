// var dep = document.getElementById('dep');
// document.addEventListener('keydown', (e)=> {
//     if(e.keyCode == 39){
//         dep.style.transform += "translateX(50px)";  
//     }
//     else if(e.keyCode == 37){
//         dep.style.transform += "translateX(-50px)";  
//     }
//     else if(e.keyCode == 38){
//         dep.style.transform += "translateY(-50px)";  
//     }
//     else if(e.keyCode == 40){
//         dep.style.transform += "translateY(50px)";  
//     }
    
// })

let x = 4;
let y = 4;
var canvas = document.getElementById('can');
var context = canvas.getContext('2d');
var widhtSquare = 20;
var heigthSquare = 20;
context.fillStyle = "yellow";
context.fillRect (x*widhtSquare,y*heigthSquare,widhtSquare,heigthSquare);