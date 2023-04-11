class Snake {
    constructor(corps,  direction) {
        this.corps = corps;
        this.direction = direction;
        this.widhtSquare = 20;
        this.heigthSquare = 20;
    }

    drowSnake(context, Canvawidht, Canvaheigth){
        context.clearRect(0,0,Canvawidht.width,Canvaheigth.heigth)
        this.corps.forEach(ele => {
            const [x, y] = this.body[ele];
            context.fillStyle = "red";
            context.fillRect(
              x * this.widhtSquare,
              y * this.heigthSquare,
              this.widhtSquare,
              this.heigthSquare
            );
        });

    }
    changeDirection(change){
        this.direction = change;
    }
    move(incX,incY){
        let [x, y] = this.corps[this.body.length - 1];
        this.corps.shift();
        this.corps.push([x + incX, y + incY]);
    }

}