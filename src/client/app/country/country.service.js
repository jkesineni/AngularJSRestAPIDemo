(function () {
    'use strict';

    angular
        .module('sampleapp')
        .factory('countryDataService', countryDataService);

    countryDataService.$inject = ['$http', 'baseUrl'];

    function countryDataService($http, baseUrl) {
        var service = {
            getCountryCodes: getCountryCodes
        };

        return service;

        function getCountryCodes() {
            return $http({method: 'GET', url: ' http://services.groupkt.com/country/get/all'}).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                     return data;
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    return data;
                   
                });
            
        }
        
    }
})();