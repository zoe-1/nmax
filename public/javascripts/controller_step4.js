var nmaxControllers = angular.module('nmaxControllers4', []);

		/*
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
		 */

function Step4Controller($scope, $http) {

	$http.get('step4_json').success(function(data) {
		// Convert string to json
		// var obj = jQuery.parseJSON( data );
		$scope.lessons = data;
		// $scope.test = data.toJSON();

		// console.log('Entered step4_json controller');
	});

	 $scope.orderProp = 'name';
	 $scope.json_stuff = 'Hi we got JSON';

}

nmaxControllers.controller('Step4Ctrl', ['$scope', '$http', Step4Controller ]);
