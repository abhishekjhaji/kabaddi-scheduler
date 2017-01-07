(function(){
    'use strict';

    describe("AddTeamCtrl", function(){
        var AddTeamCtrl;

        beforeEach(module('kabbaddiScheduler.addTeam'));
        beforeEach(inject(function ($controller) {
            AddTeamCtrl = $controller('AddTeamCtrl');
        }));

        it("should clear new team form after adding", function(){
            AddTeamCtrl.newTeam.name = "team1";
            AddTeamCtrl.newTeam.location = "Loc1";

            AddTeamCtrl.addTeam();

            expect(AddTeamCtrl.newTeam).toEqual({ name: null, location: null });
        });
    });

})();