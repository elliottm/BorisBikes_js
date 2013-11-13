describe('Person', function() {
  
  var player1 = new Player('Mark');

  it('should have a name', function() {
  	expect(player1.name).toEqual('Mark');
  });

  it('does not have a bike', function() {
  	expect(player1.bike).toBeFalsy();
  })

  it('can rent a bike', function() {
  	var station = { rent:function(){} }
  	spyOn(station, "rent");
  	player1.rentaBike(station);
  	// expect(player1.bike).toEqual({});
  	expect(station.rent).toHaveBeenCalled();
  })

  it('has a bike after renting', function() {
  	var bike = { breaks:function(){} };
  	var station = { rent: function() {return bike;}};
  	player1.rentaBike(station);
  	expect(player1.bike).toEqual(bike);
  })

  it('can return a bike', function() {
  	var station = { returns:function(){} }
  	spyOn(station, "returns");
  	player1.returnaBike(station);
  	expect(station.returns).toHaveBeenCalled();
  })

  it('has no bike after returning', function(){
  	var bike = { };
  	var station = { returns: function() {return null;}};
  	spyOn(station, "returns");
  	player1.returnaBike(station);
  	expect(player1.bike).toEqual();
  })

  it('can break a bike', function() {
  	var bike = { breaks:function(){} };
  	var station = { rent: function() {return bike;}};
  	spyOn(bike, "breaks");
  	player1.rentaBike(station);
  	player1.fallOver();
  	expect(bike.breaks).toHaveBeenCalled();
  })

})
