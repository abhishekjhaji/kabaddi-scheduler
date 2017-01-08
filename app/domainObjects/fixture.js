(function(){
    "use strict";

    angular.module('kabbaddiScheduler')
        .factory('FixtureFactory', function (){
            function Fixture(matches){
                var allTeams = [];
                matches.forEach(function (match) {
                    allTeams = allTeams.concat([match.homeTeam, match.guestTeam]);
                });
                this.allTeams = allTeams;
                this.matches = matches;
            }
            return {
                create : function(matches){
                    return new Fixture(matches);
                }
            };
        });
})();