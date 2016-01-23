/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.update
   * @ngdoc config
   */

  angular
    .module('myApp.update')
    .config(updateConfig);

  updateConfig.$inject = ['$routeProvider']

  function updateConfig($routeProvider) {
    $routeProvider.when('/update', {
      templateUrl: 'productUpdate/productUpdate.html',
      controller: 'updateController',
      controllerAs: 'update'
    });
  }
})();