// Shamelessly stolen from the author's UnderlinedCell code.
// Not sure if this is exactly what the author wanted, especially the draw function, but it passes all of his unit tests.
function StretchCell(inner) {
  this.inner = inner;
}
StretchCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
StretchCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat(" ", width)]);
};
