function Bike() {
  this.broken = false;
}

Bike.prototype.breaks = function() {
	this.broken = true;
}

Bike.prototype.fix = function() {
	this.broken = false
}