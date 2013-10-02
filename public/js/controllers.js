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

function FormsCtrl($scope, Form) {
  $scope.forms = Form.query(function() {
    // loaded
  }, function() {
    // error
    toastr.error('Can not retrieve forms');
  });
}

function FormDetailsCtrl($scope, $routeParams, $location, Form) {
  $scope.form = Form.get({ formId : $routeParams.formId });

  $scope.deleteForm = function() {
    Form.delete({formId :  $routeParams.formId}, function() {
      toastr.success('Form \'' + $scope.form.name + '\' has been deleted');
      $location.path('/forms');
    }, function() {
      // error
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
function FormDeployCtrl($scope, $routeParams, $location, Form, Instance) {
  var form = Form.get({formId : $routeParams.formId}, function() {
    $scope.form = form;
  });
  $scope.deploy = {};

  // TODO : Validate input data
  $scope.deployForm = function() {
    var payload = {
      name : $scope.deploy.name,
      description : $scope.deploy.description,
      form : $routeParams.formId
    }
    var instance = new Instance(payload);
    instance.$save(function() {
      toastr.success('Form has been deployed');
      $location.path('/instances');
    }, function() {
      toastr.error('Form can not be deployed');
      $location.path('/forms');
    });
  }

  $scope.forms = function () {
    $location.url('/forms');
  };
}

/**
 * Create a form record.
 * FIXME : This is temporary since the form is created by the form editor
 *
 * @param $scope
 * @param $http
 * @constructor
 */
function FormCreateCtrl($scope, $location, Form) {
  $scope.form = {};

  $scope.createForm = function() {
    var payload = {
      name : $scope.form.name,
      description : $scope.form.description,
      anything : 'else...'
    };

    var form = new Form(payload);
    form.$save(function() {
      // success
      toastr.success('Form has been created');
      $location.path('/forms');
    }, function() {
      // error
      toastr.error('Form can not be created');
      $location.path('/forms');
    });
  }

  $scope.forms = function() {
    $location.url('/forms');
  }
}

function InstancesCtrl($scope, Instance) {
  $scope.instances = Instance.query();
}

function InstanceDetailsCtrl($scope, $routeParams, $location, Instance, Result) {
  $scope.instance = Instance.get({instanceId : $routeParams.instanceId});
  $scope.results = Result.query({instance : $routeParams.instanceId});

  $scope.deleteInstance = function() {
    Instance.delete({instanceId : $routeParams.instanceId}, function() {
      toastr.success('Instance \'' + $scope.instance.name + '\' has been deleted');
      $location.path('/instances');
    }, function() {
      toastr.error('Instance \'' + $scope.instance.name + '\' can not be deleted');
      $location.path('/instances');
    })
  }
}

function ResultsCtrl($scope, Result) {
  $scope.results = Result.query();
}

function ResultDetailsCtrl($scope, $routeParams, $location, Result) {
  $scope.result = Result.get({resultId : $routeParams.resultId});

  $scope.deleteResult = function() {
    Result.delete({resultId : $routeParams.resultId}, function() {
      toastr.success('Result has been deleted');
      $location.path('/results');
    }, function() {
      toastr.error('Result can not be deleted');
      $location.path('/results');
    })
  }
}