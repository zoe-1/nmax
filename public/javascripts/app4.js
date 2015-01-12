'use strict';

/* App Module */

var nmaxApp = angular.module('nmaxApp', [
  'ngRoute',
  'nmaxControllers4'
]);

nmaxApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        // templateUrl: 'partials/phone-list.html',
        templateUrl: 'step4_template',
        controller: 'Step4Ctrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);
