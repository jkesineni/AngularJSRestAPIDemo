(function () {
    'use strict';

    angular
        .module('sampleapp')
        .controller('StatesListController', StatesListController);

    StatesListController.$inject = ['statesDataservice','$location', 'countryCode'];

    function StatesListController(statesDataservice, $location, countryCode) {
        var vm = this;
       
        vm.countryCode = countryCode.getCountryCode();
        vm.states = [];
        vm.title = 'States List';

       
        vm.getStates = getStates;
        vm.gotoHome = gotoHome;
       
        
        activate();

        function activate() {
            return getStates();
        }

        function getStates() {
            return statesDataservice.getStates(vm.countryCode)
                .then(function(data){
                     return vm.states = data.data.RestResponse.result;;
                });
        }
        
       
        
         function gotoHome()
        {
            $location.path('/home');
        }
      
    }
    
     
})();