(function(){
    "use strict";

    angular.module('kabbaddiScheduler.validator', [])
        .factory('ConsecutiveDaysValidator', function(){
            function hasAnyTeamCommon(sourceTeams, targetTeams) {
                var teamMap = {};
                sourceTeams.forEach(function(team){
                    teamMap[team.name || team] = true;
                });

                return !targetTeams.every(function(team){
                    return !teamMap[team.name || team];
                });
            }

            return {
                areValidFixtures : function(fixtures){
                    var teamsPlayedLastDay = [];
                    return fixtures.every(function(fixture){
                        var allTeams = fixture.allTeams || [].concat.apply([], fixture);
                        var isValid = !hasAnyTeamCommon(teamsPlayedLastDay, allTeams);
                        teamsPlayedLastDay = allTeams;
                        return isValid;
                    });
                }
            };
        })
})();