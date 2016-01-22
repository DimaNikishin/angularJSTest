/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.resourceNotFoundError
   * @ngdoc config
   */

  angular
    .module('myApp.resourceNotFoundError')
    .config(resourceNotFoundErrorConfig);

  resourceNotFoundErrorConfig.$inject = ['$routeProvider']

  function resourceNotFoundErrorConfig($routeProvider) {
    $routeProvider.when('/404', {
      templateUrl: 'resourceNotFoundError/resourceNotFoundError.html'
    });
  }
})();