    (function () {
        'use strict';

        angular
            .module('sampleapp', ['ngAnimate', 'ngRoute'])
            .config(routeConfig)
            .factory('countryCode', countryCode)
            .value('baseUrl', 'http://services.groupkt.com/')
            .value('defaultCountry', 'USA');
        
        routeConfig.$inject = ['$routeProvider'];

        function routeConfig($routeProvider) {
            $routeProvider
                .when('/',{ 
                    templateUrl: 'app/country/country.html', 
                    title: 'Country'})
                .when('/searchlist',
                      { templateUrl: 'app/state/stateslist.html', 
                       title: 'States'}
                     )
                .otherwise({ redirectTo: '/' });
            
        }
        countryCode.$inject = [];
        
        function countryCode()
        {
          var countryCode = 'USA';
          return {  

              getCountryCode : function () {
                return countryCode;
              },

              setCountryCode : function (code) {
                countryCode = code;
              }
          }
        }
        
    })();