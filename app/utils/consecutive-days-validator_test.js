(function(){
    "use strict";

    describe('kabbaddiScheduler.matchScheduler', function () {
        var ConsecutiveDaysValidator;
        function mockTeam(name){
            return {
                name : name
            };
        }

        beforeEach(module('kabbaddiScheduler.validator'));
        beforeEach(inject(function (_ConsecutiveDaysValidator_) {
            ConsecutiveDaysValidator = _ConsecutiveDaysValidator_;
        }));

        describe('ConsecutiveDaysValidator ', function () {
            it('should validate four teams per fixture', function () {
                var fixtures = [
                    {
                        allTeams: [mockTeam("team1"), mockTeam("team2"), mockTeam("team3"), mockTeam("team4")]
                    },
                    {
                        allTeams: [mockTeam("team8"), mockTeam("team5"), mockTeam("team6"), mockTeam("team7")]
                    },
                    {
                        allTeams: [mockTeam("team9"), mockTeam("team6"), mockTeam("team3"), mockTeam("team1")]
                    }
                ];

                expect(ConsecutiveDaysValidator.areValidFixtures(fixtures)).toEqual(false);
            });

            it('should validate two team per fixture without team name', function () {
                var fixtures = [
                    {
                        allTeams: [1,2]
                    },
                    {
                        allTeams: [3,4]
                    }
                ];

                expect(ConsecutiveDaysValidator.areValidFixtures(fixtures)).toEqual(true);
            });
        });
    });
})();