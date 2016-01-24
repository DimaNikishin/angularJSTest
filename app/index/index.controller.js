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

  indexController.$inject = ['$scope','userService','productsResolveService','productsService','$location','customArrayFilter'];

  function indexController($scope,userService,productsResolveService,productsService,$location,customArrayFilter){
    var that = this;
    that.loggedUserName;
    that.products;
    that.mainFunctional = mainFunctional;
    that.deleteProduct = deleteProduct;
    that.changeProductList = changeProductList();
    that.productList = productList;
    that.filteredArray;
    that.listOption = {};



    activate()

    function activate(){
      _setupListOptionsObject(that.listOption,10,0)

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
      that.filteredArray = that.products;
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
      that.filteredArray = that.products;
      _setupListOptionsObject(that.listOption,10,0)
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

    function productList(n){
      _setupListOptionsObject(that.listOption,n,0,n);
      that.filteredArray = customArrayFilter(that.products,that.listOption.startList,that.listOption.endList);
    }

    function changeProductList(){
      return {
       nextPage: function(){
         _setupListOptionsObject(that.listOption,that.listOption.endList + that.listOption.increse,that.listOption.endList,that.listOption.increse);
         that.filteredArray = customArrayFilter(that.products,that.listOption.startList,that.listOption.endList);
       },
        previousPage: function(){
          _setupListOptionsObject(that.listOption,that.listOption.startList,that.listOption.startList - that.listOption.increse,that.listOption.increse);
          that.filteredArray = customArrayFilter(that.products,that.listOption.startList,that.listOption.endList);
        }
      }
    }

    function _setupListOptionsObject(object,endList,startList,increse){
      object.increse = increse;
      object.endList = endList;
      object.startList = startList;
      if(increse){
        if(!object.startList && increse >= that.products.length){
          object.hidePreviousPage = true;
          object.hideNextPage = true;
        }else if(!object.startList){
          object.hidePreviousPage = true;
          object.hideNextPage = false;
        }
        else if(object.endList >= that.products.length){
          object.hidePreviousPage = false;
          object.hideNextPage = true;
        }
        else{
          object.hidePreviousPage = false;
          object.hideNextPage = false;
        }
      }
      else{
        object.hidePreviousPage = true;
        object.hideNextPage = true;
      }
    }
  }
})();
