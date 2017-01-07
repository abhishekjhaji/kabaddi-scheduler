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

            vm.addTeam = function(){
                Teams.add(vm.newTeam);
                resetNewTeam();
            };

            vm.teams = Teams.all;

            resetNewTeam();

            function resetNewTeam(){
                vm.newTeam = {
                    name : null,
                    location : null
                };
            }
        })

        .factory('Teams', function (){
            var teams = [];
            return {
                add : function(newTeam){
                    teams.push(newTeam);
                },
                all : function(){
                    return teams;
                }
            };
        });
})();