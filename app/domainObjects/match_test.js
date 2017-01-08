(function () {
    'use strict';

    describe('kabbaddiScheduler MatchFactory', function () {
        var MatchFactory, match;

        beforeEach(module('kabbaddiScheduler'));

        beforeEach(inject(function (_MatchFactory_) {
            MatchFactory = _MatchFactory_;
            match = MatchFactory.create({name:"India", location:"delhi"}, {name:"Aus", location:"perth"});
        }));

        it('should create match with home team, guest team and location', function(){
            expect(match.homeTeam).toEqual({name:"India", location:"delhi"});
            expect(match.guestTeam).toEqual({name:"Aus", location:"perth"});
            expect(match.location).toEqual("delhi");
        });

        it("should return inverted match with teams swapped", function(){
            match = match.invert();

            expect(match.guestTeam).toEqual({name:"India", location:"delhi"});
            expect(match.homeTeam).toEqual({name:"Aus", location:"perth"});
            expect(match.location).toEqual("perth");
        });

    });

})();