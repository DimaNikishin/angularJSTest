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

  updateController.$inject = ['$scope','productsService','$location'];

  function updateController($scope,productsService, $location){
    var that = this;
    that.newUser = {};
    that.validProducts;
    that.message;
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
    }

    function create(user){
      angular.extend(that.newUser,user);
      that.newUser.number = that.validProducts.length + 1;
      that.newUser.checked = false;
      that.newUser.description = false;
      that.validProducts.push(that.newUser);
      productsService.update(that.validProducts);
      that.update = "User created";
      $location.path('/index');
    }

  }
})();
