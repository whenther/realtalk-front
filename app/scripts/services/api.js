'use strict';

var baseUsr = window.location.hostname === 'localhost' ?
  'http://localhost:8080/api' :
  'https://realtalk-api.herokuapp.com/api';

/**
 * @ngdoc service
 * @name realtalkApp.me
 * @description
 * # me
 * Factory in the realtalkApp.
 */
angular.module('realtalkApp')
  .factory('Me', ['$resource', function ($resource) {
    return $resource(baseUsr + '/me', {},
      {'query': {isArray: false}}
    );
  }])
/**
 * @ngdoc service
 * @name realtalkApp.new
 * @description
 * # new
 * Factory in the realtalkApp.
 */
  .factory('New', ['$resource', function ($resource) {
    return $resource(baseUsr + '/new/:username');
  }])
/**
 * @ngdoc service
 * @name realtalkApp.contacts
 * @description
 * # contacts
 * Factory in the realtalkApp.
 */
  .factory('Contacts', ['$resource', function ($resource) {
    return $resource(baseUsr + '/contacts/:contacts', {},
      {'query': {isArray: true}}
    );
  }])
/**
 * @ngdoc service
 * @name realtalkApp.Users
 * @description
 * # Users
 * Get info about other users
 */
  .factory('Users', ['$resource', function ($resource) {
    return $resource(baseUsr + '/users/:users');
  }])
/**
 * @ngdoc service
 * @name realtalkApp.SignIn
 * @description
 * # SignIn
 * Factory in the realtalkApp.
 */
  .factory('SignIn', ['$resource', function ($resource) {
    return $resource(baseUsr + '/signin');
  }]);
