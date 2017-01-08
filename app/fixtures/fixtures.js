(function(){
    "use strict";

    angular.module('kabbaddiScheduler.fixtures', [
        'ngRoute',
        'kabbaddiScheduler.matchScheduler'
    ])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/fixtures', {
                templateUrl: 'fixtures/fixtures.html',
                controller: 'FixturesCtrl',
                controllerAs: 'vm'
            });
        }])

        .controller('FixturesCtrl', function(Teams, MatchScheduler){
            var vm = this;
            vm.fixtures = MatchScheduler.generateFixtures(Teams.all());
        });
})();