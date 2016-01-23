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

  indexController.$inject = ['$scope','userService','productsResolveService','productsService','$location'];

  function indexController($scope,userService,productsResolveService,productsService,$location){
    var that = this;
    that.loggedUserName;
    that.products;
    that.mainFunctional = mainFunctional;
    that.deleteProduct = deleteProduct;


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
      };

      if(productsService.products.length){
        that.products = productsService.products;
      }
      else{
        that.products = productsResolveService.data.products;
      }

    }

    function deleteProduct(){
      function checkedFilter(element, index, array){
        if(element.checked){
          return false;
        }
        else{
          return element;
        }
      }
      that.products = that.products.filter(checkedFilter);
      for(var i = 0; i< that.products.length; i++){
        that.products[i].number = i+1;
      }
      productsService.update(that.products);
    }

    function mainFunctional(productNumber){

      function productUpdate(element, index, array){
        if(array[index].number == productNumber && !array[index].description){
          array[index].description = true;
        }
        else{
          array[index].description = false;
        }
      };

      function productCheck(element, index, array){
        if(array[index].number == productNumber){
          array[index].checked = true;
        }
      };

      return {
        openDescription : function(){
          that.products.forEach(productUpdate);
        },
        checkToRemove: function(){
          that.products.forEach(productCheck);
        },
        toUpdatePage: function(productNumber){
          $location.path('/update/'+ productNumber)
        }
      }
    }
  }
})();
