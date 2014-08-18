
var service = angular.module('contactServices', ['ngResource']);

service.factory('contactService', ['$rootScope', '$resource', '$timeout',
  function($rootScope, $resource, $timeout) {

    // $resource endpoints
    var loginSvc = $resource('/admin/login', {}, {
      post: {method: 'POST', isArray: false}
    });

    var keycodeSvc = $resource('/api/v1/keycodes/:keycode', {}, {
      post: {method: 'POST', isArray: false},
      put: {method: 'PUT', params: {keycode:'@keycode'}, isArray: false},
      del: {method: 'DELETE', params: {keycode:'@keycode'}, isArray: false}
    });

    // vars
    var keycodeList = [];
    var roomList = [];

    // refresh data
    var refreshKeycode = function refreshKeycode() {
      keycodeSvc.query(function(data) {
        angular.copy(data, keycodeList);
      });
      $timeout(refreshKeycode, 3000);
    };

    // refresh data
    var refreshRoom = function refreshRoom() {
      roomSvc.query(function(data) {
        angular.copy(data, roomList);
      });
      $timeout(refreshRoom, 3000);
    };


    // exports
    return {
      getKeycodeList: function getKeycodeList() {
        return keycodeList;
      }
    }
  }
]);
