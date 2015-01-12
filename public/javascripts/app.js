'use strict';

/* App Module */

var nmaxApp = angular.module('nmaxApp', [
  'ngRoute',
  'nmaxControllers'
]);

nmaxApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'TestCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);
