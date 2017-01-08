(function(){
    "use strict";
    describe('kabbaddiScheduler.matchScheduler', function () {
        var SearchStrategy, ConsecutiveDaysValidator;

        beforeEach(module('kabbaddiScheduler.strategies'));
        beforeEach(module('kabbaddiScheduler.validator'));
        beforeEach(inject(function (_SearchStrategy_, _ConsecutiveDaysValidator_) {
            SearchStrategy = _SearchStrategy_;
            ConsecutiveDaysValidator = _ConsecutiveDaysValidator_;
        }));

        xit("should generate fixtures using round robin", function(){
            var fixtures = SearchStrategy.generatePairs(8);
            fixtures.forEach(function(fixture){
                console.log(fixture)
            });
            expect(ConsecutiveDaysValidator.areValidFixtures(fixtures)).toEqual(true);
        });
    });
})();