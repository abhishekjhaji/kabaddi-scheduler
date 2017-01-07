(function () {
    'use strict';

    fdescribe('kabbaddiScheduler.addTeam  Teams', function () {
        var Teams;

        beforeEach(module('kabbaddiScheduler.addTeam'));
        beforeEach(inject(function (_Teams_) {
            Teams = _Teams_;
        }));

        describe('Teams ', function () {
            it('should add team', function () {
                Teams.add({name: "team1", location: "loc1"});

                expect(Teams.all()).toEqual([{name: "team1", location: "loc1"}])
            });
        });
    });

})();