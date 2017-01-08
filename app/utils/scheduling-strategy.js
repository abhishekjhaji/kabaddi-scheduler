(function(){
    'use strict';

    angular.module('kabbaddiScheduler.strategies', [])
        .factory('RoundRobinStrategy', function(){
            var DUMMY = -1;

            function initTeams(numberOfTeams){
                var teams = [];
                for (var teamNo = 1; teamNo <= numberOfTeams; teamNo += 1) {
                    teams.push(teamNo);
                }
                if (numberOfTeams % 2 === 1) {
                    teams.push(DUMMY);
                }
                return teams;
            }

            function isValidPair(team1, team2) {
                return team1 !== DUMMY && team2 !== DUMMY;
            }

            function teamPairsForRound(teams) {
                var round = [];
                var numberOfTeams = teams.length;
                var numberOfTeamPairs = numberOfTeams / 2;
                for (var teamNo = 0; teamNo < numberOfTeamPairs; teamNo++) {
                    var pairOfTeamNo = numberOfTeams - 1 - teamNo;
                    if (isValidPair(teams[teamNo], teams[pairOfTeamNo])) {
                        round.push([teams[teamNo], teams[pairOfTeamNo]]);
                    }
                }
                return round;
            }

            function rotateTeams(teams) {
                teams.splice(1, 0, teams.pop());
            }

            return {
                generatePairs : function(numberOfTeams){
                    var rounds = [];
                    var teams = initTeams(numberOfTeams);
                    numberOfTeams = teams.length;

                    for (var roundNo = 0; roundNo < numberOfTeams - 1; roundNo ++) {
                        rounds[roundNo] = teamPairsForRound(teams);
                        rotateTeams(teams);
                    }
                    return rounds;
                }
            };
        })
        .factory('SearchStrategy', function(){

            function generateTeamMatrix(teams) {
                var matrix = [];
                for(var i=0; i<teams; i++){
                    var row = [];
                    for(var j=0; j<teams; j++){
                        row.push(false);
                    }
                    matrix.push(row);
                }
                return matrix;

            }

            function searchTeamsForMatchFromStart(teamMatrix, skipTeams){
                for(var teamNo1 = 0; teamNo1 < teamMatrix.length; teamNo1++){
                    if(skipTeams.includes(teamNo1)) continue;

                    for(var teamNo2 = teamMatrix.length-1; teamNo2 >= 0; teamNo2--){
                        if(skipTeams.includes(teamNo2) || teamNo1 === teamNo2) continue;

                        if(!teamMatrix[teamNo1][teamNo2]){
                            teamMatrix[teamNo1][teamNo2] = true;
                            return [ teamNo1, teamNo2 ];
                        }
                    }
                }
            }

            function searchTeamForMatchFromEnd(teamMatrix, skipTeams){
                for(var teamNo1 = teamMatrix.length-1; teamNo1 >= 0; teamNo1--){
                    if(skipTeams.includes(teamNo1)) continue;

                    for(var teamNo2 = 0; teamNo2 < teamMatrix.length; teamNo2++){
                        if(skipTeams.includes(teamNo2) || teamNo1 === teamNo2) continue;

                        if(!teamMatrix[teamNo1][teamNo2]){
                            teamMatrix[teamNo1][teamNo2] = true;
                            return [ teamNo1, teamNo2 ];
                        }
                    }
                }
            }
            return {
                generatePairs : function(totalTeams){
                    var teamMatrix = generateTeamMatrix(totalTeams);
                    var fixtures = [];
                    var numberOfDays = ((totalTeams * totalTeams) - totalTeams)/2;
                    var teamsToSkip = [];
                    for(var iteration = 0; iteration < numberOfDays; iteration++){
                        var teamPair1 = searchTeamsForMatchFromStart(teamMatrix, teamsToSkip);
                        var teamPair2 = searchTeamForMatchFromEnd(teamMatrix, teamsToSkip.concat(teamPair1));
                        if(!teamPair2){
                            console.log("could not find pairs after day ::", fixtures.length);
                            return fixtures;
                        }
                        fixtures.push([teamPair1, teamPair2]);
                        teamsToSkip = teamPair1.concat(teamPair2);
                    }
                    return fixtures;
                }
            }
        });

})();