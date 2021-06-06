function Cell(x, y, width) {
  if (random(1) < 0.5) {
    //randomly set mine locations
    this.mine = true;
  } else {
    this.mine = false;
  }

  this.revealed = false;
  this.x = x;
  this.y = y;
  this.w = w; //width
}

Cell.prototype.show = function () {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);

  if (this.revealed) {
    if (this.mine) {
      ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5); //show a circle representing mine in the center of the cell if mine exists in this spot
    }
  }
};
