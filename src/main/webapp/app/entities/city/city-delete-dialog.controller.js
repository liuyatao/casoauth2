(function() {
    'use strict';

    angular
        .module('casoauth2App')
        .controller('CityDeleteController',CityDeleteController);

    CityDeleteController.$inject = ['$uibModalInstance', 'entity', 'City'];

    function CityDeleteController($uibModalInstance, entity, City) {
        var vm = this;

        vm.city = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            City.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
