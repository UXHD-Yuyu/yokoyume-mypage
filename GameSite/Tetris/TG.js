var FIELD_W = 300, FIELD_H = 600;
var COLS = 10, ROWS = 20;
var BLOCK_W = FIELD_W / COLS, BLOCK_H = FIELD_H / ROWS;
var canvas = document.getElementById("field");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "black":
for (var i = 0; i < COLS; i++){
    ctx.strokeRect(i * BLOCK_W, 0, BLOCK_W, BLOCK_H);
}