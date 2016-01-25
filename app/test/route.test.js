'use strict';

describe('myApp module', function() {

  var route;
  beforeEach(module('myApp'));
  beforeEach(inject(function($route){
    route = $route;
  }));


  describe('app route functions', function(){

    it('should ....', inject(function() {
      expect(route.routes['/authentication'].controller).toBe('authenticationController');
      expect(route.routes['/authentication'].templateUrl).
        toEqual('authentication/authentication.html');

      expect(route.routes['/index'].controller).toBe('indexController');
      expect(route.routes['/index'].templateUrl).
        toEqual('index/index.html');

      expect(route.routes['/update'].controller).toBe('updateController');
      expect(route.routes['/update'].templateUrl).
        toEqual('productUpdate/productUpdate.html');

      expect(route.routes['/update/:productNumber'].controller).toBe('updateController');
      expect(route.routes['/update/:productNumber'].templateUrl).
        toEqual('productUpdate/productUpdate.html');

      expect(route.routes['/settings'].controller).toBe('settingsController');
      expect(route.routes['/settings'].templateUrl).
        toEqual('settings/settings.html');

    }));

  });
});