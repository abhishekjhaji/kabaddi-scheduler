(function() {
    'use strict';

    angular.module('kabbaddiScheduler')
        .factory('Teams', function (){
            var teams = [];
            return {
                add : function(newTeam){
                    teams.push(newTeam);
                },

                all : function(){
                    return teams;
                },

                clearAll : function(){
                    teams = [];
                }
            };
        });
})();
