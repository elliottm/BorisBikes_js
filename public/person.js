function Player(name) {
  this.name = name;
}

Player.prototype.rentaBike = function(station) {
  this.bike = station.rent();
}

Player.prototype.returnaBike = function(station) {
  this.bike = station.dockBike();
}

Player.prototype.fallOver = function() {
  this.bike = this.bike.breaks();
}
