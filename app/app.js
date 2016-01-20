'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.authentication',
  'myApp.index',
  'myApp.settings',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'}); //временое изменение чтобы постоянно не вводить пароль, поменять потом на аутонтификацию
}]);
