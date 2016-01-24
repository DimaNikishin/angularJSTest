'use strict';

describe('myApp.index controller', function() {

  var indexCtrl;
  var scope;
  var mockUserService;
  var mockProductsResolveService;
  var mockProductsService;

  beforeEach(module('myApp.index'));

  beforeEach(function () {

    mockUserService = {
      validUsers: [{logged:true,name:"TestUser",email:"testuser@example.com"}]
    };
    mockProductsResolveService = {
      data: {
        products:[]
      }
    };
    mockProductsService = {
      products: [{checked:true,number:1},{checked:false,number:2}],
      update:function (newProducts){
        mockProductsService.products = newProducts;
      }
    };

    module(function ($provide) {
      $provide.value('userService', mockUserService);
      $provide.value('productsResolveService', mockProductsResolveService);
      $provide.value('productsService', mockProductsService);
    });

  });

  beforeEach(inject(function($controller, $rootScope,$location){
    scope = $rootScope.$new();
    indexCtrl = $controller('indexController as index', {$scope:scope});
  }));

  describe('index controller', function(){

    it('should not be undefined', inject(function() {
      //spec body
      expect(indexCtrl).toBeDefined();
    }));

  });

  describe('index controller scope test', function(){

    it('should have public functions and vars', inject(function() {
      //spec body
      expect(scope.index.mainFunctional instanceof Function).toBe(true);
      expect(typeof scope.index.loggedUserName).toBe('string');
      expect(scope.index.products instanceof Array).toBe(true);
      expect(scope.index.deleteProduct instanceof Function).toBe(true);
      expect(scope.index.changeProductList instanceof Object).toBe(true);
      expect(scope.index.productList instanceof Function).toBe(true);
      expect(scope.index.filteredArray instanceof Array).toBe(true);
      expect(scope.index.listOption instanceof Object).toBe(true);

    }));

  });

  describe('index controller activate() test', function(){

    it('should create listOption object', inject(function() {
      //spec body
      expect(scope.index.listOption.increse).toBe(undefined);
      expect(scope.index.listOption.endList).toBe(10);
      expect(scope.index.listOption.startList).toBe(0);
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(true);

    }));

  });

  describe('index controller activate() test', function(){

    it('should set loggedUserName with correct data', inject(function($controller) {
      //spec body
      expect(scope.index.loggedUserName).toBe('TestUser');

      //reloaded controller
      mockUserService.validUsers[0].name = undefined;
      $controller('indexController as index', {$scope:scope});
      expect(scope.index.loggedUserName).toBe('testuser@example.com');

    }));

  });

  describe('index controller activate() test', function(){

    it('should set products with data from mockProductsService/mockProductsResolveService', inject(function($controller) {
      //spec body
      expect(scope.index.products).toEqual([{checked:true,number:1},{checked:false,number:2}]);
      expect(scope.index.products).toEqual(mockProductsService.products);

      //reloaded controller
      mockUserService.validUsers[0].name = undefined;
      mockProductsService.products = [];
      $controller('indexController as index', {$scope:scope});
      expect(scope.index.products).toEqual([]);
      expect(scope.index.products).toEqual(mockProductsResolveService.data.products);

    }));

  });

  describe('index controller activate() test', function(){

    it('should set filteredArray', inject(function() {
      //spec body
      expect(scope.index.filteredArray).toEqual(scope.index.products);

    }));

  });

  describe('index controller deleteProduct() test', function(){

    it('should return array without checked objects', inject(function() {
      expect(scope.index.products.length).toBe(2);
      expect(scope.index.products[0].checked).toBe(true);
      expect(scope.index.products[1].checked).toBe(false);
      scope.index.deleteProduct();
      expect(scope.index.products.length).toBe(1);
      expect(scope.index.products[0].checked).toBe(false);
    }));

  });

  describe('index controller deleteProduct() test', function(){

    it('should change number after deleting object', inject(function() {
      expect(scope.index.products.length).toBe(2);
      expect(scope.index.products[0].number).toBe(1);
      expect(scope.index.products[1].number).toBe(2);
      scope.index.deleteProduct()
      expect(scope.index.products[0].number).toBe(1);
    }));

  });

  describe('index controller deleteProduct() test', function(){

    it('should change filteredArray and run _setupListOptionsObject', inject(function() {
      scope.index.deleteProduct();
      expect(scope.index.filteredArray).toEqual(scope.index.products);

      expect(scope.index.listOption.increse).toBe(undefined);
      expect(scope.index.listOption.endList).toBe(10);
      expect(scope.index.listOption.startList).toBe(0);
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(true);
    }));

  });

  describe('index controller productList(n) test', function(){

    it('should run _setupListOptionsObject with n arg for endList and increase and save filtered array in filteredArray', inject(function() {
      expect(scope.index.filteredArray).toEqual([{checked:true,number:1},{checked:false,number:2}]);
      scope.index.productList(1);
      expect(scope.index.filteredArray).toEqual([{checked:true,number:1}]);

      expect(scope.index.listOption.increse).toBe(1);
      expect(scope.index.listOption.endList).toBe(1);
      expect(scope.index.listOption.startList).toBe(0);
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(false);
    }));

  });

  describe('index controller changeProductList() test', function(){

    it('should run with controller init and save object with 2 functions in changeProductList', inject(function() {
      expect(scope.index.changeProductList instanceof Object).toBe(true);
      expect(scope.index.changeProductList.nextPage instanceof Function).toBe(true);
      expect(scope.index.changeProductList.previousPage instanceof Function).toBe(true);
    }));

  });

  describe('index controller changeProductList() test', function(){

    it('changeProductList functions should run _setupListOptionsObject and save filtered array in filteredArray', inject(function() {
      //default values
      expect(scope.index.listOption.increse).toBe(undefined);
      expect(scope.index.listOption.endList).toBe(10);
      expect(scope.index.listOption.startList).toBe(0);
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(true);

      scope.index.productList(1);
      expect(scope.index.listOption.increse).toBe(1);
      expect(scope.index.listOption.endList).toBe(1);
      expect(scope.index.listOption.startList).toBe(0);
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(false);

      scope.index.changeProductList.nextPage();
      expect(scope.index.listOption.increse).toBe(1);
      expect(scope.index.listOption.endList).toBe(2);
      expect(scope.index.listOption.startList).toBe(1);
      expect(scope.index.listOption.hidePreviousPage).toBe(false);
      expect(scope.index.listOption.hideNextPage).toBe(true);

      scope.index.changeProductList.previousPage();
      expect(scope.index.listOption.increse).toBe(1);
      expect(scope.index.listOption.endList).toBe(1);
      expect(scope.index.listOption.startList).toBe(0);
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(false);

    }));

  });

  describe('index controller _setupListOptionsObject() test', function(){

    it('test _setupListOptionsObject() function by .previousPage()', inject(function() {
      scope.index.listOption.increse = 10;
      scope.index.listOption.endList = 0;
      scope.index.listOption.startList =0;
      scope.index.products.length = 10;
      scope.index.changeProductList.nextPage();
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(true);

      scope.index.listOption.increse = 20;
      scope.index.listOption.endList = 0;
      scope.index.listOption.startList =0;
      scope.index.products.length = 10;
      scope.index.changeProductList.nextPage();
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(true);

      scope.index.listOption.increse = 10;
      scope.index.listOption.endList = 0;
      scope.index.listOption.startList =0;
      scope.index.products.length = 20;
      scope.index.changeProductList.nextPage();
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(false);

      scope.index.listOption.increse = 10;
      scope.index.listOption.endList = 10;
      scope.index.listOption.startList =0;
      scope.index.products.length = 10;
      scope.index.changeProductList.nextPage();
      expect(scope.index.listOption.hidePreviousPage).toBe(false);
      expect(scope.index.listOption.hideNextPage).toBe(true);

      scope.index.listOption.increse = 10;
      scope.index.listOption.endList = 10;
      scope.index.listOption.startList =0;
      scope.index.products.length = 20;
      scope.index.changeProductList.nextPage();
      expect(scope.index.listOption.hidePreviousPage).toBe(false);
      expect(scope.index.listOption.hideNextPage).toBe(true);

      scope.index.listOption.increse = 10;
      scope.index.listOption.endList = 5;
      scope.index.listOption.startList =0;
      scope.index.products.length = 20;
      scope.index.changeProductList.nextPage();
      expect(scope.index.listOption.hidePreviousPage).toBe(false);
      expect(scope.index.listOption.hideNextPage).toBe(false);

      scope.index.listOption.increse = undefined;
      scope.index.changeProductList.nextPage();
      expect(scope.index.listOption.hidePreviousPage).toBe(true);
      expect(scope.index.listOption.hideNextPage).toBe(true);

    }));

    describe('index controller mainFunctional() test', function(){

      it('should return object with 3 functions', inject(function() {
        expect(scope.index.mainFunctional(1) instanceof Object).toBe(true);
        expect(scope.index.mainFunctional(1).openDescription instanceof Function).toBe(true);
        expect(scope.index.mainFunctional(1).checkToRemove instanceof Function).toBe(true);
        expect(scope.index.mainFunctional(1).toUpdatePage instanceof Function).toBe(true);

      }));

    });

    describe('index controller mainFunctional() test', function(){

      it('openDescription() test', inject(function($controller) {
        scope.index.mainFunctional(1).openDescription();
        expect(scope.index.products[0].description).toBe(true);

        mockProductsService.products = [{checked:true,number:1,description:true},{checked:false,number:2}];
        $controller('indexController as index', {$scope:scope});
        scope.index.mainFunctional(1).openDescription();
        expect(scope.index.products[0].description).toBe(false);

      }));

    });

    describe('index controller mainFunctional() test', function(){

      it('checkToRemove() test', inject(function($controller) {
        mockProductsService.products = [{checked:false,number:1,description:true},{checked:false,number:2}];
        $controller('indexController as index', {$scope:scope});

        scope.index.mainFunctional(1).checkToRemove();
        expect(scope.index.products[0].checked).toBe(true);
        expect(scope.index.products[1].checked).toBe(false);

      }));

    });

    describe('index controller mainFunctional() test', function(){

      it('toUpdatePage() test', inject(function($location) {
        scope.index.mainFunctional(1).toUpdatePage(1);
        expect($location.path()).toBe('/update/1');

      }));

    });

  });
});