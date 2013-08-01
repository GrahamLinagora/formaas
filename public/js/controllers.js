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
      toastr.error('Can not get forms');
      $scope.status = status;
    });
}

function FormDetailsCtrl($scope, $routeParams, $http, $location) {
  $http.get(getResource('/forms/' + $routeParams.formId)).success(function(data) {
    $scope.form = data;
  });

  $scope.deleteForm = function() {
    $http.delete(getResource('/forms/' + $routeParams.formId)).success(function(data) {
      toastr.success('Form \'' + $scope.form.name + '\' has been deleted');
      $location.path('/forms');
    }).error(function(data) {
      toastr.error('Form can not be deleted');
      $location.path('/forms');
    })
  }
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
      toastr.success('Form has been deployed');
      $location.path('/instances');
    }).error(function(data, status, headers, config) {
      toastr.error('Form can not be deployed');
      $location.path('/forms');
    });
  }

  $scope.forms = function () {
    $location.url('/forms');
  };
}

function InstancesCtrl($scope, $http) {
  $http.get(getResource('/instances'))
    .success(function(data, status, headers, config) {
      $scope.instances = data;
    })
    .error(function(data, status, headers, config) {
      toastr.error('Can not get instances');
      $scope.status = status;
    });
}

function InstanceDetailsCtrl($scope, $routeParams, $http, $location) {
  $http.get(getResource('/instances/' + $routeParams.instanceId)).success(function(data) {
    $scope.instance = data;
  });

  $scope.deleteInstance = function() {
    $http.delete(getResource('/instances/' + $routeParams.instanceId)).success(function (data) {
      toastr.success('Instance \'' + $scope.instance.name + '\' has been deleted');
      $location.path('/instances');
    }).error(function(data) {
        toastr.error('Instance \'' + $scope.instance.name + '\' can not be deleted');
        $location.path('/instances');
    })
  }
}