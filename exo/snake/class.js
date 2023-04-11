class Snake {
    constructor(corps, direction) {
        this.corps = corps;
        this.direction = direction;
        this.widhtSquare = 20;
        this.heigthSquare = 20;
        this.incX = 1;
        this.incY = 0
    }

    drowSnake(context){
        // context.clearRect(0,0,Canvawidht,Canvaheigth)
        this.corps.forEach(ele => {
            const [x, y] = ele;
            context.fillStyle = "red";
            context.fillRect(
              x * this.widhtSquare,
              y * this.heigthSquare,
              this.widhtSquare,
              this.heigthSquare
            );
        });

    }
    changeDirection(keyCode){
        if (keyCode == 39 && this.direction  != 37) {
                this.incX = 1;
                this.incY = 0;
                this.direction  = keyCode;
              }
              if (keyCode == 37 && this.direction  != 39) {
                this.incX = -1;
                this.incY = 0;
                this.direction  = keyCode;
              }
              if (keyCode == 38 && this.direction  != 40) {
                this.incY = -1;
                this.incX = 0;
                this.direction  = keyCode;
              }
              if (keyCode == 40 && this.direction  != 38) {
                this.incX = 0;
                this.incY = 1;
                this.direction  = keyCode;
              }
    }
    moove(canvasWidth, canvasHeight){
        let [x, y] = this.corps[this.corps.length - 1];
        let XX = x +this.incX;
        let YY = y +this.incY;
        console.log(x,y)
        
        if(XX < 0 ){
            XX = Math.floor(canvasWidth/this.widhtSquare)-1
        }
        if(XX == Math.floor(canvasWidth/this.widhtSquare)){
            XX = 0
        }
        if(YY < 0 ){
            YY = Math.floor(canvasHeight/this.heigthSquare)-1
        }
        if(YY == Math.floor(canvasHeight/this.heigthSquare)){
            YY = 0
        }
        console.log(XX,YY)
        this.corps.shift();
        this.corps.push([XX, YY]);
    }
    eatAplle(appleX, appleY){
        let last = this.corps[this.corps.length - 1]
        return last[0]== appleX && last[1]== appleY;
    }
    grow(){
        let [x,y] = this.corps[this.corps.length - 1]
        this.corps.push([x+this.incX, y+this.incY])

    }
    colision(){
        let rest = this.corps.slice(0,this.corps.length -1)
        let last = this.corps[this.corps.length -1]
        return rest.find(item => item[0] == last[0]  && item[1] == last[1])
    }

}

class Apple{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.widhtSquare = 20;
        this.heigthSquare = 20;
    }

    drow(context){
        let rayon = this.widhtSquare/2
        context.beginPath();
        context.arc(this.x*this.widhtSquare+rayon, this.y*this.heigthSquare+rayon,rayon,0, Math.PI*2)
        context.fillStyle = "lightgreen"
        context.fill()
        // context.fillRect(this.x*this.heigthSquare, this.y*this.widhtSquare, this.heigthSquare, this.widhtSquare)
        context.closePath()
    }
    changePosition(snakeCorps, canvasHeight, canvasWidth){
        let maxX = Math.floor(canvasWidth/this.widhtSquare)-1;
        let maxY = Math.floor(canvasHeight/this.heigthSquare)-1;
        let x = 0;
        let y = 0;
        do{
            x = Math.floor(Math.random()*maxX)
            y = Math.floor(Math.random()*maxY)
        }
        while(snakeCorps.find(b => b[0] == x && b[1] == y))
        this.x = x
        this.y = y;
    }
   
}