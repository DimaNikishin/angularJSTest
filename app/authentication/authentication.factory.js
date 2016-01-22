/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.authentication
   * @ngdoc factory
   * @name authenticationService
   */

  angular
    .module('myApp.authentication')
    .factory('authenticationService',authenticationService);

  authenticationService.$inject = [];

  function authenticationService(){
    var service = {
      login: login
    }

    return service;

    function login(user, validUsers, callback){
      var response = {};
      for(var i = 0; i < validUsers.length; i++){
        if(user.email === validUsers[i].email && user.password === validUsers[i].password){
          response.success = true;
          validUsers[i].logged = true;
          break;
        }
        else{
          response.message = 'Username or password is incorrect';
        }
      }
      callback(response);
    }
  }
})();
