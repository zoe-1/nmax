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


axpressApp.controller('LessonListCtrl', function($scope) {

  var lessons_data = [
		{ "name":"Step 2 Angularjs && Unit testing", "content":[ {"item_name":"none"},{"item_description":"none"} ] },
		{ "name":"Step 3 Add Express routes, contollers and views", 
			"content":[ {"item_name":"Make Controller Code", "item_description":"Make app.js and routes/lesson.js controller"}, {"item_name":"Make html views", "item_description":"Make views/lessons/index.ejs views/lessons/step3.ejs"}
								] },
		{ "name":"Step 4: Filter Repeater Data", 
			"content":[ {"item_name":"Create Lessons Controller", 
									 "item_description":"Make a controller to manaage the lessons data."},
									{"item_name":"Filter the Lessons Controller data in the view", 
									 "item_description":"User Angularjs repeater to list data in the view. Use a filter to sort."},
									{"item_name":"E2E Tests run on searched data", 
									 "item_description":"Spent the afternoon getting selenium and chrome driver to download through the proxy. aiya....  All e2e tests pass  :-)"},
			] }
		];

  $scope.lessons =  lessons_data[2];

	//$scope.name = "Happy";
	$scope.name = "Lessons";
});
