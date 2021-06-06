function create2DArray(col, row) {
  var array = new Array(col);
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }
  return array;
}

var totalMines = 15;
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
      grid[i][j] = new Cell(i, j, w); //make new cell for every col/row
    }
  }

  //Picking totalMine locations
  var locationOptions = [];
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      locationOptions.push([i, j]);
    }
  }
  // console.log(options);

  for (var k = 0; k < totalMines; k++) {
    var index = floor(random(locationOptions.length));
    var choice = locationOptions[index];
    var i = choice[0];
    var j = choice[1];
    //remove location so it cannot be randomly selected again
    locationOptions.splice(index, 1);
    grid[i][j].mine = true;
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].countMines();
    }
  }
}

function mousePressed() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].reveal();
      }
    }
  }
}

function draw() {
  background(255);
  strokeWeight(2);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
