function Cell(x, y, width) {
  this.mine = true;
  this.revealed = true;
  this.x = x;
  this.y = y;
  this.w = w; //width
}

Cell.prototype.show = function () {
  rect(this.x, this.y, this.w, this.w);
};
