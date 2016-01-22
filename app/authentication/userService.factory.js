/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.authentication
   * @ngdoc factory
   * @name userService
   */

  angular
    .module('myApp.authentication')
    .factory('userService',userService);

  userService.$inject = ['$http'];

  function userService($http){
    var validUsers = [];
    var users = {
      validUsers: validUsers,
      get: getUsers,
      update: updateUsers
    }

    return users;

    function getUsers(){
      return $http.get('http://localhost:8000/app/users.json')
        .success(getUsersComplete)
        .error(getUsersError);

      function getUsersComplete(data){
        return data.users;
      }

      function getUsersError(err){
        return err;
      }

    }

    function updateUsers(newUser){
      users.validUsers = newUser;
    }

  }
})();
