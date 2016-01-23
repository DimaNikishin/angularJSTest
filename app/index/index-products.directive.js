/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.index
   * @ngdoc directive
   * @name product
   */

  angular
    .module('myApp.index')
    .directive('indexProduct',product);

  product.$inject = [];

  function product(){
    return {
      scope: {
        product: '@',
        mainFunctional: '&'
      },
      templateUrl: 'index/ProductTemplate/ProductTemplate.html',
      link: function(scope, element, attrs) {
        scope.formStringToObject = function (string) {
          var object = scope.$eval("(" + string + ')');
          return object;
        };
      }
    }
  };
})();
