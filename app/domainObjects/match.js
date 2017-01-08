(function(){
    "use strict";

    angular.module('kabbaddiScheduler')
        .factory('MatchFactory', function (){
            function invertMatch(){
                return new Match(this.guestTeam, this.homeTeam);
            }

            function Match(homeTeam, guestTeam){
                this.homeTeam = homeTeam;
                this.guestTeam = guestTeam;
                this.location = homeTeam.location;
                this.invert = invertMatch
            }

            return {
                create : function(homeTeam, guestTeam){
                    return new Match(homeTeam, guestTeam);
                }
            };
        });
})();