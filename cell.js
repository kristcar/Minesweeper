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
    }
  }
};

Cell.prototype.contains = function (x, y) {
  return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w;
};

Cell.prototype.reveal = function () {
  this.revealed = true;
};
