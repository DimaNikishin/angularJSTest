'use strict';

/**
 * @ngdoc module
 * @name myApp
 */

angular.module('myApp', [
  'ngRoute',
  'myApp.core',
  'myApp.authentication',
  'myApp.index',
  'myApp.settings',
  'myApp.resourceNotFoundError',
  'myApp.update',
  'myApp.version'
])