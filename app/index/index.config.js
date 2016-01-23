/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.index
   * @ngdoc config
   */

  angular
    .module('myApp.index')
    .config(indexConfig);

  indexConfig.$inject = ['$routeProvider']

  function indexConfig($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: 'index/index.html',
      controller: 'indexController',
      controllerAs: 'index',
      resolve: {
        productsResolveService: productsResolveService
      }
    });
  }
  productsResolveService.$inject = ['productsService'];

  function productsResolveService(productsService){
    return productsService.get();
  }
})();