'use strict';

/**
 * @ngdoc function
 * @name realtalkApp.controller:AppctrlCtrl
 * @description
 * # AppctrlCtrl
 * Controller of the realtalkApp
 */
angular.module('realtalkApp')
  .controller('AppCtrl', ['Session', function (Session) {
    this.session = Session;
  }]);
