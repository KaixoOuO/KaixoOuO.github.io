import TileMap from "./TileRender"

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const tileMap = new TileMap();

function gameLoop(){
    tileMap.drawTiles(canvas,ctx);
}

setInterval(gameLoop, 1000 / 60);