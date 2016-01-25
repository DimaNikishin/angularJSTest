'use strict';
describe('myApp.index products service', function() {

  var productsService;
  var httpBackend;

  beforeEach(module('myApp.index'));
  beforeEach(inject(function(_productsService_,$httpBackend){{
    productsService = _productsService_;
    httpBackend = $httpBackend;
  }}));

  describe('index controller scope test', function(){

    it('should have 3 property and return object', function () {
      expect(productsService instanceof Object).toBe(true);
      expect(productsService.products instanceof Array).toBe(true);
      expect(productsService.update instanceof Function).toBe(true);
      expect(productsService.get instanceof Function).toBe(true);
    });

    it('products should be empty array', function () {
      expect(productsService.products.length).toBe(0);

    });

    it('update() should update products', function () {
      expect(productsService.products.length).toBe(0);
      productsService.update([1])
      expect(productsService.products.length).toBe(1);

    });

    it('get() should call XHR call', function () {
      var returnData = { excited: true };
      httpBackend.expectGET('http://localhost:8000/app/products.json').respond(returnData);

      var returnedPromise = productsService.get();

      var result;
      returnedPromise.then(function(response) {
        result = response.data;
      });

      httpBackend.flush();

      expect(result).toEqual(returnData);

    });

  });

});
