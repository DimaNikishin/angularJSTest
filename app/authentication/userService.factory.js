/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';
  angular
    .module('myApp.authentication')
    .factory('userService',userService);

  userService.$inject = ['$http'];

  function userService($http){
    var users = {
      get: getUsers
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

  }
})();
