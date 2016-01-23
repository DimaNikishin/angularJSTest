/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.update
   * @ngdoc controller
   * @name updateController
   */

  angular
    .module('myApp.update')
    .controller('updateController',updateController);

  updateController.$inject = ['$scope','userService'];

  function updateController($scope,userService){
    var that = this;

  }
})();
