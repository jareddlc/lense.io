var contactApp = angular.module('contactApp', ['ngRoute', 'contactControllers', 'contactServices']);

contactApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {


  $routeProvider
    /*.when('/short/:userId', {
      templateUrl: '/partials/short.html',
    })
    .when('/full/:userId', {
      templateUrl: '/partials/full.html',
    })*/
    .when('/', {
      templateUrl: '../partials/short.html',
    });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
}]);
