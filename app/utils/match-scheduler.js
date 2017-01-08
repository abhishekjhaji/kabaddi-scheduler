(function () {
    'use strict';

    angular.module('kabbaddiScheduler.matchScheduler', [
        'kabbaddiScheduler.strategies'
    ])
        .factory('MatchScheduler', function (MatchFactory, FixtureFactory, RoundRobinStrategy) {


            function teamPairsToFixtures(teams, roundRobinSchedule) {
                var flattendMatches = [].concat.apply([], roundRobinSchedule);
                return flattendMatches.map(function (match) {
                    return FixtureFactory.create([MatchFactory.create(teams[match[0] - 1], teams[match[1] - 1])]);
                });
            }



            function inverted(fixtures) {
                return fixtures.map(function(fixture){
                    var invertedMatches = fixture.matches.map(function(match){
                        return match.invert();
                    });
                    return FixtureFactory.create(invertedMatches);
                });
            }

            return {
                generateFixtures: function (teams) {
                    var fixtures = teamPairsToFixtures(teams, RoundRobinStrategy.generatePairs(teams.length));
                    return fixtures.concat(inverted(fixtures));
                }
            };
        })

})();