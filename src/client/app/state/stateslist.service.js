(function () {
    'use strict';

    angular
        .module('sampleapp')
        .factory('statesDataservice', statesDataservice);

    statesDataservice.$inject = ['$http', 'baseUrl'];

    function statesDataservice($http, baseUrl) {
        var service = {
            getStates: getStates           
        };

        return service;

        function getStates(code) {
            var testurl = baseUrl + 'state/get/' + code + '/all';
            return $http({method: 'GET', url: baseUrl + 'state/get/' + code + '/all'}).
                success(function(data, status, headers, config) {
                   return data;
                }).
                error(function(data, status, headers, config) {
                   return data;                   
                });
            }
        
    }
})();