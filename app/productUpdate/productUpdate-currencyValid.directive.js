/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.authentication
   * @ngdoc directive
   * @name password
   */

  angular
    .module('myApp.update')
    .directive('currency',currency);

  currency.$inject = [];

  function currency(){
    var INTEGER_REGEXP = new RegExp('^[0-9]{4}(\,|\.)[0-9]{2}$')
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.currency = function(modelValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }

          if (INTEGER_REGEXP.test(modelValue)) {
            // it is valid
            return true;
          }

          // it is invalid
          return false;
        };
      }
    };
  };
})();
