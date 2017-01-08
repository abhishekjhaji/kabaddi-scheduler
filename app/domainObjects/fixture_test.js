(function () {
    'use strict';

    describe('kabbaddiScheduler FixtureFactory', function () {
        var FixtureFactory, fixture;

        beforeEach(module('kabbaddiScheduler'));

        beforeEach(inject(function (MatchFactory, _FixtureFactory_) {
            FixtureFactory = _FixtureFactory_;
            fixture = FixtureFactory.create([
                    MatchFactory.create(
                        {name:"India", location:"delhi"},
                        {name:"Aus", location:"perth"}
                    )]
            );
        }));

        it('should have all the teams scheduled for fixture', function(){
            expect(fixture.allTeams).toEqual([{ name: 'India', location: 'delhi' }, { name: 'Aus', location: 'perth' } ]);
        });

        it("should have all the matches of fixture", function(){
            expect(fixture.matches[0].homeTeam).toEqual({ name: 'India', location: 'delhi' });
            expect(fixture.matches[0].location).toEqual('delhi');
        });

    });

})();