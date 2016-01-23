/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.core
   * @ngdoc directive
   * @name valid
   */

  angular
    .module('myApp.core')
    .directive('valid',valid);

  valid.$inject = [];

  function valid(){
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var INTEGER_REGEXP = new RegExp(attrs.valid);
        ctrl.$validators.valid = function(modelValue) {
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
