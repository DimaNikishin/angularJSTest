/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';
  angular
    .module('myApp.index')
    .controller('indexController',indexController);

  indexController.$inject = ['$scope','userService','$location'];

  function indexController($scope,userService, $location){
    var that = this;
    that.validUsers = {};
    that.navigate = navigateTo;

    activate();

    function activate() {
      return userService.get().success(function(data) {
        that.validUsers = data.users[0];
        if(!that.validUsers.name){
          that.validUsers.name = that.validUsers.email
        }
      });
    }

    function navigateTo(path){
      $location.path(path)
    }
  }
})();
