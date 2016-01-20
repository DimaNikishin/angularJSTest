/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  angular
    .module('myApp.index')
    .config(indexConfig);

  indexConfig.$inject = ['$routeProvider']

  function indexConfig($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: 'index/index.html',
      controller: 'indexController',
      controllerAs: 'index'
    });
  }
})();