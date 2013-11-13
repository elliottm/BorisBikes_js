function Station(name) {
  this.name = name;
  this.bikes = [];
}

Station.prototype.dockBike = function(bike) {
  this.bikes.push(bike);
}

Station.prototype.rent = function() {
  return this.bikes.pop();
}
