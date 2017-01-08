(function () {
    'use strict';

    describe('kabbaddiScheduler Teams', function () {
        var Teams;

        beforeEach(module('kabbaddiScheduler'));
        beforeEach(module('kabbaddiScheduler.addTeam'));
        beforeEach(inject(function (_Teams_) {
            Teams = _Teams_;
        }));

        it('should add team', function () {
            Teams.add({name: "team1", location: "loc1"});

            expect(Teams.all()).toEqual([{name: "team1", location: "loc1"}]);
        });

        it('should reset teams to empty on clear', function(){
            Teams.add({name: "team1", location: "loc1"});

            Teams.clearAll();

            expect(Teams.all()).toEqual([]);
        });

    });

})();