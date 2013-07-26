'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.
      when('/', {
        templateUrl: '/partials/index',
        controller: IndexCtrl
      }).when('/forms', {
        templateUrl: '/partials/forms',
        controller: FormsCtrl
      }).when('/forms/:formId', {
        templateUrl: '/partials/form',
        controller: FormDetailsCtrl
      }).when('/instances', {
        templateUrl: '/partials/instances',
        controller: InstancesCtrl
      }).when('/instances/:instanceId', {
        templateUrl: '/partials/instance',
        controller: InstanceDetailsCtrl
      });

    $locationProvider.html5Mode(true);

    // cf http://better-inter.net/enabling-cors-in-angular-js/
    // CORS configuration
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);