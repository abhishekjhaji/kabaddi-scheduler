(function () {
    'use strict';

    angular.module('kabbaddiScheduler.addTeam', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/addTeam', {
                templateUrl: 'add-team/add-team.html',
                controller: 'AddTeamCtrl',
                controllerAs: 'vm'
            });
        }])

        .controller('AddTeamCtrl', function (Teams) {
            var vm = this;
            vm.autoGenerateCount = 6;

            vm.addTeam = function () {
                Teams.add(vm.newTeam);
                resetNewTeam();
            };

            vm.generateTeams = function () {
                Teams.clearAll();
                for (var i = 1; i <= vm.autoGenerateCount; i++) {
                    Teams.add({
                        name: 'Team ' + i,
                        location: 'Location ' + i
                    });
                }
            };

            vm.teams = Teams.all;

            resetNewTeam();

            function resetNewTeam() {
                vm.newTeam = {
                    name: null,
                    location: null
                };
            }
        });
})();