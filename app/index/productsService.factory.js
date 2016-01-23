/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.index
   * @ngdoc factory
   * @name productsService
   */

  angular
    .module('myApp.index')
    .factory('productsService',productsService);

  productsService.$inject = ['$http'];

  function productsService($http){
    var products = {
      get: getProducts
    }

    return products;

    function getProducts(){
      return $http.get('http://localhost:8000/app/products.json')
        .success(getUsersComplete)
        .error(getUsersError);

      function getUsersComplete(data){
        return data.products;
      }

      function getUsersError(err){
        return err;
      }

    }

  }
})();
