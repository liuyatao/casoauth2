(function() {
    'use strict';

    angular
        .module('casoauth2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('city', {
            parent: 'entity',
            url: '/city',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Cities'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/city/cities.html',
                    controller: 'CityController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('city-detail', {
            parent: 'entity',
            url: '/city/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'City'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/city/city-detail.html',
                    controller: 'CityDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'City', function($stateParams, City) {
                    return City.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'city',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('city-detail.edit', {
            parent: 'city-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/city/city-dialog.html',
                    controller: 'CityDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['City', function(City) {
                            return City.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('city.new', {
            parent: 'city',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/city/city-dialog.html',
                    controller: 'CityDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                name: null,
                                country: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('city', null, { reload: 'city' });
                }, function() {
                    $state.go('city');
                });
            }]
        })
        .state('city.edit', {
            parent: 'city',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/city/city-dialog.html',
                    controller: 'CityDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['City', function(City) {
                            return City.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('city', null, { reload: 'city' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('city.delete', {
            parent: 'city',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/city/city-delete-dialog.html',
                    controller: 'CityDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['City', function(City) {
                            return City.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('city', null, { reload: 'city' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
