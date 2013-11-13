describe('Bike', function() {

  var bike = new Bike;

  it('is not broken', function() {
  	expect(bike.broken).toEqual(false);
  })

  it('can break', function(){
  	bike.breaks();
  	expect(bike.broken).toEqual(true);
  })

  it('can be fixed', function() {
  	bike.breaks();
  	bike.fix();
  	expect(bike.broken).toEqual(false);
  })

})