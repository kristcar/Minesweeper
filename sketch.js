function create2DArray(col, row) {
  var array = new Array(col);
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }
  return array;
}

var grid;
var cols;
var rows;
var w = 60;

function setup() {
  createCanvas(701, 701);
  rows = floor(height / w);
  cols = floor(width / w);
  grid = create2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(w * i, w * j, w); //make new cell for every col/row
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
