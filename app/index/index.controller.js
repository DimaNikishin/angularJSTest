/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.index
   * @ngdoc controller
   * @name indexController
   */

  angular
    .module('myApp.index')
    .controller('indexController',indexController);

  indexController.$inject = ['$scope','userService','$location'];

  function indexController($scope,userService, $location){
    var that = this;
    that.loggedUserName;

    activate()

    function activate(){
      for(var i = 0; i < userService.validUsers.length; i++){
        if(userService.validUsers[i].logged){
          if(userService.validUsers[i].name){
            that.loggedUserName = userService.validUsers[i].name
          }
          else{
            that.loggedUserName = userService.validUsers[i].email
          }
        }
      }
    }
  }
})();
