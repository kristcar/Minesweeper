function create2DArray(col, row) {
  var array = new Array(col);
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }
  return array;
}

var cols = 20;
var rows = 20;
var grid;

function setup() {
  createCanvas(200, 200);
  grid = create2DArray(20, 20);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(); //make new cell for every col/row
    }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
