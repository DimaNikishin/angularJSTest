/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  angular
    .module('myApp.authentication')
    .config(authenticationConfig);

  authenticationConfig.$inject = ['$routeProvider']

  function authenticationConfig($routeProvider) {
    $routeProvider.when('/authentication', {
      templateUrl: 'authentication/authentication.html',
      controller: 'authenticationController',
      controllerAs: 'authentication',
      resolve: {
        usersResolveService: usersResolveService
      }
    });
  }
  usersResolveService.$inject = ['userService'];
  function usersResolveService(userService){
    return userService.get();
  }
})();