
var contactControllers = angular.module('contactControllers', []);

contactControllers.controller('NavbarCtrl',  ['$rootScope', '$scope', '$window', 'contactService',
  function($rootScope, $scope, $window, contactService) {
    $scope.templates = [ 
      {name: 'short.html', url: 'partials/short.html'},
      {name: 'full.html', url: 'partials/full.html'},
      {name: 'settings.html', url: 'partials/settings.html'},
    ];
    $scope.template = $scope.templates[0];

    $scope.select = function select(num) {
      $scope.template = $scope.templates[num];
    }
  }
]);
