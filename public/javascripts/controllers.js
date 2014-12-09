var axpressApp = angular.module('axpressApp', []);

axpressApp.controller('SpaceListCtrl', function($scope) {
  $scope.spaces = [
    {'name': '西点八八',
     'snippet': '德国人开的面包店。甜点也满好。'},
    {'name': '非洲月亮',
     'snippet': '中西餐浑河店'},
    {'name': 'MONOLITOS™',
     'snippet': '大理最好的炸鱼'}
  ];

	//$scope.name = "Happy";
	$scope.name = "大理想国";
});
