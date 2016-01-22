/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.authentication
   * @ngdoc controller
   * @name authenticationController
   */

  angular
    .module('myApp.authentication')
    .controller('authenticationController',authenticationController);

  authenticationController.$inject = ['$scope','usersResolveService','authenticationService','$location','userService'];

  function authenticationController($scope,usersResolveService,authenticationService, $location,userService){
    var that = this;
    that.user = {};
    that.login = login;

    function login(){
      var users = getUsers();
      authenticationService.login(that.user,users,function(response) {
        if (response.success) {
          userService.update(users)
          $location.path('/index');
        } else {
          that.error = response.message;
        }
      })
    }

    function getUsers(){
      if(userService.validUsers.length){
        return userService.validUsers;
      }
      else{
        return usersResolveService.data.users;
      }
    }
  }
})();
