'use strict';

var endpoint = 'http://localhost:3000';

var getResource = function(path) {
  return endpoint + path;
}

function IndexCtrl($scope, $http) {

}

function HeaderController($scope) {
  $scope.template = 'partials/header';
}

function FormsCtrl($scope, $http) {
  $http.get(getResource('/forms'))
    .success(function(data, status, headers, config) {
      $scope.status = status;
      $scope.forms = data;
    })
    .error(function(data, status, headers, config) {
      $scope.status = status;
    });
}

function FormDetailsCtrl($scope, $routeParams, $http) {
  $http.get(getResource('/forms/' + $routeParams.formId)).success(function(data) {
    $scope.form = data;
  });
}

/**
 * Deploy a new form (ie instanciate it)
 *
 * @param $scope
 * @param $routeParams
 * @param $http
 * @constructor
 */
function FormDeployCtrl($scope, $routeParams, $http, $location) {
  $http.get(getResource('/forms/' + $routeParams.formId)).success(function(data) {
    $scope.form = data;
  });

  $scope.deploy = {};

  // TODO : Validate input data
  $scope.deployForm = function() {
    var payload = {
      name : $scope.deploy.name,
      description : $scope.deploy.description,
      form : $routeParams.formId
    }
    $http.post(getResource('/instances'), payload).success(function(data, status, headers, config) {
      $location.path('/instances');
    }).error(function(data, status, headers, config) {
      // TODO : Display error
    });
  }
}

function InstancesCtrl($scope, $http) {
  $http.get(getResource('/instances'))
    .success(function(data, status, headers, config) {
      $scope.instances = data;
    })
    .error(function(data, status, headers, config) {
      $scope.status = status;
    });
}

function InstanceDetailsCtrl($scope, $routeParams, $http) {
  $http.get(getResource('/instances/' + $routeParams.instanceId)).success(function(data) {
    $scope.instance = data;
  });
}