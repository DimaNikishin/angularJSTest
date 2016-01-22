/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.settings
   * @ngdoc config
   */

  angular
    .module('myApp.settings')
    .config(settingsConfig);

  settingsConfig.$inject = ['$routeProvider']

  function settingsConfig($routeProvider) {
    $routeProvider.when('/settings', {
      templateUrl: 'settings/settings.html',
      controller: 'settingsController',
      controllerAs: 'settings'
    });
  }
})();