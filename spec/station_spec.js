describe("Station", function() {

  var station;
  
  beforeEach(function() {
	 
  station = new Station('Waterloo');
  });
  
  it('has a name', function() {
    expect(station.name).toEqual('Waterloo');
  });

  it('does not have bikes', function() {
    expect(station.bikes.length).toEqual(0);
  });

  it('can dock a bike', function() {
    var bike = 'lame'
    station.dockBike(bike);
    expect(station.bikes.length).toEqual(1);
  });

  it('can release a bike', function() {
    var bike = 'lame'
    station.dockBike(bike);
  console.log(station.bikes);
    station.rent();
  console.log(station.bikes);
    expect(station.bikes.length).toEqual(0);
  });


});
