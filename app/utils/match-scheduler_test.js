(function(){
    "use strict";
    describe('kabbaddiScheduler.matchScheduler', function () {
        var MatchScheduler, ConsecutiveDaysValidator;

        beforeEach(module('kabbaddiScheduler'));
        beforeEach(module('kabbaddiScheduler.strategies'));
        beforeEach(module('kabbaddiScheduler.validator'));
        beforeEach(module('kabbaddiScheduler.matchScheduler'));
        beforeEach(inject(function (_MatchScheduler_, _ConsecutiveDaysValidator_) {
            MatchScheduler = _MatchScheduler_;
            ConsecutiveDaysValidator = _ConsecutiveDaysValidator_;
        }));

        it("should generate fixtures using round robin", function(){
            var teams = [
                {name: "team1", location: "loc1"},
                {name: "team2", location: "loc2"},
                {name: "team3", location: "loc3"},
                {name: "team4", location: "loc4"},
                {name: "team5", location: "loc5"},
                {name: "team6", location: "loc6"},
                {name: "team7", location: "loc7"}
            ];
            var fixtures = MatchScheduler.generateFixtures(teams);
            expect(ConsecutiveDaysValidator.areValidFixtures(fixtures)).toEqual(true);
            expect(fixtures.length).toEqual(42);
        });
    });
})();