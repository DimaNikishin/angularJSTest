///**
// * Created by dimanikishin on 19.01.16.
// */

//Note: all validation was moved to one reusable directive core-valid.directive.js
//(function(){
//  'use strict';
//
//  /**
//   * @memberof myApp.settings
//   * @ngdoc directive
//   * @name phone
//   */
//
//  angular
//    .module('myApp.settings')
//    .directive('phone',phone);
//
//  phone.$inject = [];
//
//  function phone(){
//    var INTEGER_REGEXP = /^380(\d{9})$/g;
//    return {
//      require: 'ngModel',
//      link: function(scope, elm, attrs, ctrl) {
//        ctrl.$validators.phone = function(modelValue) {
//          if (ctrl.$isEmpty(modelValue)) {
//            // consider empty models to be valid
//            return true;
//          }
//
//          if (INTEGER_REGEXP.test(modelValue)) {
//            // it is valid
//            return true;
//          }
//
//          // it is invalid
//          return false;
//        };
//      }
//    };
//  };
//})();
