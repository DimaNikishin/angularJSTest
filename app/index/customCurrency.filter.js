/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.index
   * @ngdoc filter
   * @name customCurrency
   */

  angular
    .module('myApp.index')
    .filter('customCurrency',customCurrency);

  customCurrency.$inject = [];

  function customCurrency(){
    return function(number){
      return String(Number(number).toFixed(2)).replace('.',',')
    }
  }
})();
