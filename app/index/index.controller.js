/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.index
   * @ngdoc controller
   * @name indexController
   */

  angular
    .module('myApp.index')
    .controller('indexController',indexController);

  indexController.$inject = ['$scope','userService','productsResolveService'];

  function indexController($scope,userService,productsResolveService){
    var that = this;
    that.loggedUserName;
    that.products = productsResolveService.data.products;


    activate()

    function activate(){
      for(var i = 0; i < userService.validUsers.length; i++){
        if(userService.validUsers[i].logged){
          if(userService.validUsers[i].name){
            that.loggedUserName = userService.validUsers[i].name
          }
          else{
            that.loggedUserName = userService.validUsers[i].email
          }
        }
      }
    }
    this.mainFunctional = function(productNumber){

      function productUpdate(element, index, array){
        if(array[index].number == productNumber && !array[index].description){
          array[index].description = true;
        }
        else{
          array[index].description = false;
        }
      };

      return {
        openDescription : function(){
          that.products.forEach(productUpdate);
        }
      }
    }
  }
})();
