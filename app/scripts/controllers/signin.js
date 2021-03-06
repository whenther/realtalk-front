'use strict';

/**
 * @ngdoc function
 * @name realtalkApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the realtalkApp
 */
angular.module('realtalkApp')
  .controller('SignInCtrl', function (Auth) {
    var scope = this;

    scope.head = "Sign in to start talking!";
    scope.button = "Sign In";

    scope.user = {
      username: '',
      password: ''
    };

    // Run signout when this view comes up
    Auth.signout();

    scope.submit = function () {
      scope.error = undefined;

      Auth.signin(scope.user.username, scope.user.password)
        .catch(function (error) {
          scope.error = 'Sorry, we don\'t recognize that username or password';
        });
    };
  });
