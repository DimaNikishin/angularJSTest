/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp
   * @ngdoc config
   */

  angular
    .module('myApp')
    .config(myAppConfig);

  myAppConfig.$inject = ['$routeProvider']

  function myAppConfig($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/404'});
  }
})();