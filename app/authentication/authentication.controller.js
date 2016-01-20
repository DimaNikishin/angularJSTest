/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';
  angular
    .module('myApp.authentication')
    .controller('authenticationController',authenticationController);

  authenticationController.$inject = ['$scope','usersResolveService','authenticationService','$location'];

  function authenticationController($scope,usersResolveService,authenticationService, $location){
    var that = this;
    that.user = {};
    that.validUsers = usersResolveService.data.users;
    that.login = login;

    function login(){
      console.log(111)
      authenticationService.login(that.user,that.validUsers,function(response) {
        if (response.success) {
          $location.path('/index');
        } else {
          that.error = response.message;
        }
      })
    }
  }
})();
