(function(){
    'use strict';

    angular.module('kabbaddiScheduler', [
        'ngRoute',
        'kabbaddiScheduler.addTeam',
        'kabbaddiScheduler.fixtures'
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/'});
    }]);

})();

