'use strict';

// Declare app level module which depends on filters, and services
var formaas = angular.module('myApp', ['myApp.filters', 'myApp.formService', 'myApp.instanceService', 'myApp.directives']);

angular.module('myApp').constant('FORM_API', {
  baseUrl: 'http://localhost:3000'
});

formaas.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/index',
        controller: IndexCtrl
      }).when('/forms', {
        templateUrl: '/partials/forms',
        controller: FormsCtrl
      }).when('/forms/create', {
        templateUrl: '/partials/create_form',
        controller: FormCreateCtrl
      }).when('/forms/:formId', {
        templateUrl: '/partials/form',
        controller: FormDetailsCtrl
      }).when('/forms/:formId/deploy', {
        templateUrl: '/partials/deploy',
        controller: FormDeployCtrl
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