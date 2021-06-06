function Cell(i, j, width) {
  if (random(1) < 0.5) {
    //randomly set mine locations
    this.mine = true;
  } else {
    this.mine = false;
  }

  this.revealed = false;
  this.neighborCount = 0;
  this.x = i * w;
  this.y = j * w;
  this.i = i;
  this.j = j;
  this.w = w; //width
}

Cell.prototype.show = function () {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);

  if (this.revealed) {
    if (this.mine) {
      fill(0);
      line(
        this.x + this.w * 0.5,
        this.y + this.w * 0.5 - 22,
        this.x + this.w * 0.5,
        this.y + this.w * 0.5
      );
      ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
      //show mine if mine exists at spot clicked
    } else {
      fill(200);
      rect(this.x, this.y, this.w, this.w); //show grey square if no mine
      textAlign(CENTER);
      textSize(20);
      fill(0);
      text(
        this.neighborCount,
        this.x + this.w * 0.5,
        this.y + this.w * 0.5 + 6
      );
    }
  }
};

Cell.prototype.countMines = function () {
  if (this.mine) {
    return -1;
  }
  var total = 0;
  for (var xOffset = -1; xOffset <= 1; xOffset++) {
    for (var yOffset = -1; yOffset <= 1; yOffset++) {
      var i = xOffset + this.i;
      var j = yOffset + this.j;
      if (i > -1 && i < cols && j > -1 && j < rows) {
        var neighbor = grid[i][j];
        if (neighbor.mine) {
          total++;
        }
      }
    }
  }
  this.neighborCount = total;
};

Cell.prototype.contains = function (x, y) {
  return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w;
};

Cell.prototype.reveal = function () {
  this.revealed = true;
};
