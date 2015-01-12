'use strict';

/* jasmine specs for controllers go here */
describe('Nmax Step4Controller', function() {

	describe('Step4Ctrl', function(){ 
		var scope, ctrl, $httpBackend;

		beforeEach(module('nmaxControllers4'));

		// Must use angular-mocks.js 
		// module and inject helper methods.
		// Below configures test to use sample data whenever
		// step4_json is called.
		// Angular.js documentation https://docs.angularjs.org/tutorial/step_05
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {

			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('step4_json').
				respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

			scope = $rootScope.$new();
			ctrl = $controller('Step4Ctrl', {$scope: scope});

		}));


		it('should create "lesson" model with 2 phones fetched from xhr', function() {
			expect(scope.lessons).toBeUndefined();
			$httpBackend.flush();

			expect(scope.lessons).toEqual([{name: 'Nexus S'},
				{name: 'Motorola DROID'}]);
		});

	});
});


   /*
		* it('should set the default value of orderProp model', function() {
	  *		expect(scope.orderProp).toBe('age');
	  *	});
	  */

////////////////////////////////////////////
/* jasmine specs for controllers go here */
/*
describe('Nmax controllers', function() {



  describe('Step4Ctrl', function(){

    beforeEach(module('nmaxControllers4'));

    it('should create "spaces" model with 3 dali spaces', inject(function($controller) {
      var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

				expect(scope.lessons.length).toBe(3);

				// expect(scope.name).toBe("Happy");
				// expect(scope.name).toBe('大理想国');
    }));


  });

	beforeEach(module('nmaxControllers4'));

	describe('Step4Ctrl', function(){

      beforeEach(module('nmaxControllers4'));

			it('should create "phones" model with 3 phones', function() {

					var scope = {},
					ctrl = new Step4Ctrl(scope);

					expect(scope.lessons.length).toBe(3);

			});

			it('should create "phones" model with 3 phones', inject(function($controller) {

				var scope = {},
				ctrl = $controller('Step4Ctrl', {$scope:scope});

				// var obj = jQuery.parseJSON( scope );
				console.log( scope );

				// expect(scope.test.length).toBe(3);
				
			}));
	});

});
*/
