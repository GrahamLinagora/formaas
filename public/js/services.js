'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.

//angular.module('myApp.services', []).
//  value('version', '0.1');

angular.module('myApp.formService', ['ngResource']).
  factory('Form', function($resource, config){
    return $resource(config.formApiUri + '/forms/:formId', {}, {
      query: {
        method:'GET', isArray:true
      }
    });
  });

angular.module('myApp.instanceService', ['ngResource']).
  factory('Instance', function($resource, config){
    return $resource(config.formApiUri + '/instances/:instanceId', {}, {
      query: {
        method:'GET', isArray:true
      }
    });
  });

angular.module('myApp.resultService', ['ngResource']).
  factory('Result', function($resource, config) {
    return $resource(config.formApiUri + '/results/:resultId', {}, {
      query: {
        method:'GET', isArray:true
      }
    });
});

angular.module('myApp.configService', ['ngResource']).
  factory('Config', function($resource) {
    return $resource('/config');
  });