/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.index
   * @ngdoc filter
   * @name customArray
   */

  angular
    .module('myApp.index')
    .filter('customArray',customArray);

  customArray.$inject = [];

  function customArray(){
    var output = [];
    return function(inputArray,start,end){
      output = inputArray.slice(start,end);
      return output;
    }
  }
})();
