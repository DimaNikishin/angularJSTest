'use strict';

describe('myApp.index controller', function() {

  var indexCtrl;
  var scope;
  var mockUserService;
  var mockProductsResolveService;

  beforeEach(module('myApp.index'));

  beforeEach(function () {

    mockUserService = {
      validUsers: []
    };
    mockProductsResolveService = {
      data: {
        products:[]
      }
    };

    module(function ($provide) {
      $provide.value('userService', mockUserService);
      $provide.value('productsResolveService', mockProductsResolveService);
    });

  });

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope;
    indexCtrl = $controller('indexController', {$scope:scope});
  }));



  describe('index controller', function(){

    it('should ....', inject(function() {
      //spec body
      expect(indexCtrl).toBeDefined();
    }));

  });

});