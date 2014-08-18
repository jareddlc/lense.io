
var contactControllers = angular.module('contactControllers', []);

contactControllers.controller('LoginCtrl', ['$rootScope', '$scope', '$window', 'contactService',
  function($rootScope, $scope, $window, contactService) {

    // form data
    $scope.data = {};
    $scope.alerts = [];

    $scope.login = function() {
      $scope.alerts = [];
      contactService.postLogin($scope.data, function(res) {
        if(res.message === 'success') {
          $scope.alerts.push({type: 'success', msg: 'Login success.'});
          $window.location.href = '/admin/contact';
        }
        else {
          $scope.alerts.push({type: 'danger', msg: 'Login failed.'});
        }
      });
    };

    $scope.validate = function() {
      if($scope.data.username && $scope.data.password) {
        return false;
      }
      else {
        return true;
      }
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }
]);
