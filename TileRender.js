const tileSize = 32;

map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]



export default class TileMap {
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.grass = this.imageGet("ekisde.png");
    }

    imageGet(fileName) {
        const img = new Image();
        img.src = './Assets/${fileName}';
        return img;
    }
    
    drawTiles(canvas, ctx) {
        this.setCanvasSize(canvas);
        this.clearCanvas(canvas, ctx);
        this.drawMap(ctx);
    }

    setCanvasSize(canvas) {
        canvas.height = this.map.length * this.tileSize;
        canvas.width = this.map.length * this.tileSize;
    }

    clearCanvas(canvas, ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }

    drawMap(ctx) {
        for (let row = 0; row < this.map.length; row += 1) {
            for (let column = 0; column < this.map[row].length; column += 1) {
                const tile = this.map[row][column]
                let image = null;
                switch(tile) {
                    case 1:
                        image = this.grass;
                        break;
                }

                ctx.drawImage(image, row * this.tileSize, column * this.tileSize, this.tileSize);
            }
        }
    }
}



