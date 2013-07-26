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
      //console.log(data);
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
