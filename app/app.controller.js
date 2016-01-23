/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp
   * @ngdoc controller
   * @name mainController
   */

  angular
    .module('myApp')
    .controller('mainController',mainController);

  mainController.$inject = ['$location'];

  function mainController($location){
    var that = this;
    that.navigate = navigateTo;

    function navigateTo(path){
      $location.path(path)
    }
  }
})();
