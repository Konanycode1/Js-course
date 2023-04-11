// class Snake{
//     constructor(props){
//         this.body = props.body;
//         this.direction = props.direction;
//     }
//     drow(context, widhtSquare, heigthSquare) {

//         for (let i = 0; i < this.body.length; i++) {
//           console.log(this.body[i]);
//           const [x, y] = this.body[i];
//           context.fillStyle = "red";
//           context.fillRect(
//             x * widhtSquare,
//             y * heigthSquare,
//             widhtSquare,
//             heigthSquare
//           );
//         }
//       }
//     changeDirection(change){
//         this.direction = change

//     }
//     move(incX,incY){
//         let [x, y] = this.body[this.body.length - 1];
//         this.body.shift();
//         this.body.push([x + incX, y + incY]);
//     }
   
// }

// let canva = document.getElementById("can");

// const snake = new Snake()