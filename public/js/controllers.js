'use strict';

function IndexCtrl($scope, $http) {
  $http.get('http://localhost:3000/forms')
    .success(function(data, status, headers, config) {
      $scope.status = status;
      console.log(data);
      $scope.forms = data;
    })
    .error(function(data, status, headers, config) {
      $scope.status = status;
    });
}
