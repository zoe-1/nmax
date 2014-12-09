'use strict';


/* jasmine specs for controllers go here */
describe('Axpress controllers', function() {

  describe('SpaceListCtrl', function(){

    beforeEach(module('axpressApp'));

    it('should create "spaces" model with 3 dali spaces', inject(function($controller) {
      var scope = {},
        ctrl = $controller('SpaceListCtrl', {$scope:scope});
				expect(scope.spaces.length).toBe(3);
				// expect(scope.name).toBe("Happy");
				expect(scope.name).toBe('大理想国');
    }));

  });
});
