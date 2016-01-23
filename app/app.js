'use strict';

/**
 * @ngdoc module
 * @name myApp
 */

angular.module('myApp', [
  'ngRoute',
  'myApp.authentication',
  'myApp.index',
  'myApp.settings',
  'myApp.resourceNotFoundError',
  'myApp.version'
])

/**
 * @memberof myApp
 * @ngdoc config
 */

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/404'});
}])
//надо будет главный контроллер убрать в отдельный файл если останеться время на рефакторинг
//создал его чтобы сохранить в нем функцию с редиректом по страницам и не создавать ее каждый раз по новому и не создавать для нее сервиса

/**
 * @memberof myApp
 * @ngdoc controller
 * @name mainController
 */

.controller('mainController',mainController);

mainController.$inject = ['$location'];

function mainController($location){
  var that = this;
  that.navigate = navigateTo;

  function navigateTo(path){
    $location.path(path)
  }
}
