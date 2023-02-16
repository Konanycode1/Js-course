// var dep = document.getElementById('dep');
// document.addEventListener('keydown', (e)=> {
//     console.log(e.keyCode)
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

let snake = [[2,3],[3,3],[4,3],[5,3],[6,3]]
let x = 1;
let y = 1;
var canvas = document.getElementById('can');
var context = canvas.getContext('2d');
var widhtSquare = 20;
var heigthSquare = 20;

context.fillStyle = "yellow";
context.fillRect (x*widhtSquare,y*heigthSquare,widhtSquare,heigthSquare);


function drow(snake) {
    context.clearRect(0,0,canvas.width,canvas.height)
    for(let i = 0; i < snake.length; i++){
        console.log(snake[i]);
        const [x,y] = snake[i];
        context.fillStyle = "red";
        context.fillRect (x*widhtSquare,y*heigthSquare,widhtSquare,heigthSquare);
    }
    
}
setInterval(()=>{
    snake.shift();
    let last = snake[snake.length-1];
    document.addEventListener('keyup',(e)=>{
        if (e.keyCode == 39) {
            snake.push([last[0]+1, last[1]]);
            drow(snake);
        } 
        else if (e.keyCode == 40){
            snake.push([last[0], last[1]+1]);
            drow(snake);
        }
        else if(e.keyCode == 38) {
            snake.push([last[0], last[1]]-1);
            drow(snake);

        }
        else if(e.keyCode == 37) {
            snake.push([last[0]+1, last[1]]);
            drow(snake);

        }
        else{
            console.log('Game error')
        }
        

        
    })
},500)

function direction(tab) {
    document.addEventListener('keyup',(e)=>{
        
    })
    
    
}