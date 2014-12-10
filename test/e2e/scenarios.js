'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

/*
describe('my app', function() {

  beforeEach(function() {
    browser.get('public/index.html');
  });

});
*/


describe('Axpress App', function() {

	describe('Lessons list view', function() {

		beforeEach(function() {
			browser.get('step4');
		});


		it('should filter the lesson list as a user types into the search box', function() {

			var content = element.all(by.repeater('content in lessons.content'));
			var query = element(by.model('query'));

			expect(content.count()).toBe(3);

			query.sendKeys('Create');
			expect(content.count()).toBe(1);

			query.clear();
			query.sendKeys('Angular');
			expect(content.count()).toBe(1);

			query.clear();
			query.sendKeys('E2E');
			expect(content.count()).toBe(1);

			query.clear();
			query.sendKeys('lessons');
			expect(content.count()).toBe(2);

			/*
			query.sendKeys('Create');
			expect(phoneList.count()).toBe(1);

			query.clear();
			query.sendKeys('motorola');
			expect(phoneList.count()).toBe(2);
			*/
		});
	});
});
