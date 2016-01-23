/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.update
   * @ngdoc controller
   * @name updateController
   */

  angular
    .module('myApp.update')
    .controller('updateController',updateController);

  updateController.$inject = ['$scope','productsService','$location','$routeParams'];

  function updateController($scope,productsService, $location,$routeParams){
    var that = this;
    that.newProduct = {};
    that.validProducts;
    that.message;
    that.welcome;
    that.create = create;

    activate();

    function activate(){
      if(productsService.products.length){
        that.validProducts = productsService.products;
      }
      else{
        productsService.get().success(function(data) {
          that.validProducts = data.products;
        });
      }
      if($routeParams.productNumber){
        that.welcome = "Update"
      }
      else{
        that.welcome = "Create"
      }
    }

    function create(product){
      if($routeParams.productNumber){
        if(that.validProducts[$routeParams.productNumber-1]){
          angular.extend(that.validProducts[$routeParams.productNumber-1], product);
          productsService.update(that.validProducts);
          that.update = "User updated";
          $location.path('/index');
        }
        else{
          $location.path('/404');
        }
      }
      else{
        angular.extend(that.newProduct,product);
        that.newProduct.number = that.validProducts.length + 1;
        that.newProduct.checked = false;
        that.newProduct.description = false;
        that.validProducts.push(that.newProduct);
        productsService.update(that.validProducts);
        that.update = "User created";
        $location.path('/index');
      }
    }

  }
})();
