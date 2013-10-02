'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.

//angular.module('myApp.services', []).
//  value('version', '0.1');

angular.module('myApp.formService', ['ngResource']).
  factory('Form', function($resource){
    return $resource('http://localhost\\:3000/forms/:formId', {}, {
      query: {
        method:'GET', isArray:true
      }
    });
  });

angular.module('myApp.instanceService', ['ngResource']).
  factory('Instance', function($resource){
    return $resource('http://localhost\\:3000/instances/:instanceId', {}, {
      query: {
        method:'GET', isArray:true
      }
    });
  });