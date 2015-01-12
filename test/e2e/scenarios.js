'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

/*
describe('my app', function() {

  beforeEach(function() {
    browser.get('public/index.html');
  });

});
*/


describe('Nmax App', function() {

	describe('Lessons list view', function() {

		beforeEach(function() {
			browser.get('step4');
		});


		it('should filter the lesson list as a user types into the search box', function() {

			// by.repeater must match repeater in html view file.
			var content = element.all(by.repeater('file in lessons.file_changes'));
			var query = element(by.model('query'));

			console.log(content);
			expect(content.count()).toBe(6);

			query.sendKeys('Create');
			expect(content.count()).toBe(2);

			query.clear();
			query.sendKeys('Angular');
			expect(content.count()).toBe(1);

			query.clear();
			query.sendKeys('E2E');
			expect(content.count()).toBe(0);

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

	describe('Lessons Step5 List View', function() {

		beforeEach(function() {
			browser.get('step5');
		});

		it('should phones by search box.', function() {

			var content = element.all(by.repeater('phone in phones'));
			var query = element(by.model('query'));

			expect(content.count()).toBe(20);

			query.sendKeys('xoom');
			expect(content.count()).toBe(2);

			query.clear();
			query.sendKeys('samsung');
			expect(content.count()).toBe(5);

			query.clear();
			query.sendKeys('dell');
			expect(content.count()).toBe(2);

		});
	});
});



