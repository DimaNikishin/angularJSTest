/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';
  angular
    .module('myApp.authentication')
    .directive('password',password);

  password.$inject = [];

  function password(){
    var INTEGER_REGEXP = /^([a-zA-Z-0-9]{1,})$/;
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.password = function(modelValue) {
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
