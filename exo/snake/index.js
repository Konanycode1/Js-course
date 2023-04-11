let snake = [
  [2, 3],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
];
let x = 1;
let y = 0;
var canvas = document.getElementById("can");
var context = canvas.getContext("2d");
var widhtSquare = 20;
var heigthSquare = 20;
let inter = null;
let direction = 39;
let incX = 1;
let incY = 0;
let scoreTex  = document.querySelector(".score");
let score = 0

// context.fillStyle = "yellow";
// context.fillRect(x * widhtSquare, y * heigthSquare, widhtSquare, heigthSquare);

// function drow(snake) {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   for (let i = 0; i < snake.length; i++) {
//     console.log(snake[i]);
//     const [x, y] = snake[i];
//     context.fillStyle = "red";
//     context.fillRect(
//       x * widhtSquare,
//       y * heigthSquare,
//       widhtSquare,
//       heigthSquare
//     );
//   }
// }

// function changeDirection(keyCode) {
//   if (keyCode == 39 && direction != 37) {
//     incX = 1;
//     incY = 0;
//     direction = keyCode;
//   }
//   if (keyCode == 37 && direction != 39) {
//     incX = -1;
//     incY = 0;
//     direction = keyCode;
//   }
//   if (keyCode == 38 && direction != 40) {
//     incY = -1;
//     incX = 0;
//     direction = keyCode;
//   }
//   if (keyCode == 40 && direction != 38) {
//     incX = 0;
//     incY = 1;
//     direction = keyCode;
//   }
  
// }

// function moveSnake() {
//   let [x, y] = snake[snake.length - 1];
//   snake.shift();
//   snake.push([x + incX, y + incY]);
// }


// setInterval(() => {
//     document.addEventListener("keyup", (e) => {
//         snake.shift();
//         let last = snake[snake.length - 1];
//         snake.push([last[0] + 1, last[1]]);
//         if(e.keyCode == 39){
//             let last = snake[snake.length - 1];
//             snake.push([last[0] + 1, last[1]]);
//             drow(snake);
//         }
//         else if(e.keyCode == 40){
//             let last = snake[snake.length - 1];
//             snake.push([last[0] , last[1]+ 1]);
//             drow(snake);
//         }
//         else if(e.keyCode == 38){
//             let last = snake[snake.length - 1];
//             snake.push([last[0] , last[1]-1]);
//             drow(snake);
//         }
//         else if(e.keyCode == 37){
//             let last = snake[snake.length - 1];
//             snake.push([last[0] , last[1]+ 1]);
//             snake.push([last[0]-1 , last[1]]);
//             drow(snake);
//         }
//     });
//   }, 500);


const snakes = new Snake(snake,direction)
const apple = new Apple(7,5)

 inter = setInterval(()=>{
  
  if(snakes.colision()){
    clearInterval(inter)
    alert("Game 0ver")
  }
  let isEat = snakes.eatAplle(apple.x,apple.y)
  context.clearRect(0,0,canvas.width,canvas.height)
 
  if (isEat) {
    apple.changePosition(snakes.corps, canvas.height, canvas.width)
    snakes.grow()
    score +=10;
    scoreTex.textContent = `Score: ${score} `
    
  }
  apple.drow(context)
  snakes.drowSnake(context)
  snakes.moove(canvas.width, canvas.height)
  
 
  
},150)
document.addEventListener("keyup", (e) => {
 snakes.changeDirection(e.keyCode)
});

// snakes.changeDirection()