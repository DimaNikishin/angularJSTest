/**
 * Created by dimanikishin on 19.01.16.
 */
(function(){
  'use strict';

  /**
   * @memberof myApp.settings
   * @ngdoc controller
   * @name settingsController
   */

  angular
    .module('myApp.settings')
    .controller('settingsController',settingsController);

  settingsController.$inject = ['$scope','userService'];

  function settingsController($scope,userService){
    var that = this;
    that.validUser = userService.validUsers;
    that.message;
    that.update = update;

    function update(user){
      if(that.validUser.length){
        for(var i = 0; i < that.validUser.length; i++){
          if(that.validUser[i].logged){
            if (user.password) {
              if (user.password === user.repeatPassword) {
                angular.extend(that.validUser[i], user);
                userService.update(that.validUser)
                that.message = "Password updated"
              }
              else {
                that.message = "Please enter same password"
              }
            }
            else{
              angular.extend(that.validUser[i], user);
              userService.update(that.validUser)
              that.message = "User updated"
            }
          }
        }
      }

    }
  }
})();
