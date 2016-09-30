(function () {
    'use strict';

    angular
        .module('sampleapp')
        .controller('CountryController', CountryController);

      CountryController.$inject = ['countryDataService','$location', 'defaultCountry', 'countryCode'];

      function CountryController(countryDataService,$location,defaultCountry,  countryCode) {
        /* jshint validthis: true */
        var vm = this;
        vm.title = 'Country & States List';
        vm.countries = [];
        
        vm.getCountries = getCountries;
        vm.countryCode = countryCode.getCountryCode();
        vm.states = gotoSearchList;
             
         activate();

        function activate() {
           return getCountries();          
        }
        
         function getCountries() {
            return countryDataService.getCountryCodes()
                .then(function(data){
                     return vm.countries = data.data.RestResponse.result;;
                });
        }
        
     
        function gotoSearchList(selectedCountryCode)
        {   vm.countryCode = selectedCountryCode;
            countryCode.setCountryCode(selectedCountryCode);
            $location.path('/searchlist')
        }
      
    }
})();