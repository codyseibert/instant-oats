
angular.module('YOUR_APP')
    .controller('CpusController', [
        '$scope',
        '$routeParams',
        'CpusService'
        function (
        $scope,
        $routeParams,
        'CpusService'
        ) {
            'use strict';

            $scope.cpuId = $routeParams.cpuId;

            CpusService.getCpus()
                .success(function (pData) {
                    $scope.cpus = pData;
                });

            CpusService.getCpu($scope.cpuId)
                .success(function (pData) {
                    angular.noop();
                });

            $scope.createCpu = function () {
                var dto = {

                }
                CpusService.createCpu(dto)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.deleteCpu = function () {
                var yes = confirm("Are you sure you want to delete this cpu?");
                if (!yes) {
                    return;
                }

                CpusService.deleteCpu($scope.cpuId)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.updateCpu = function () {
                var dto = {
                    id: = $scope.cpuId
                }
                CpusService.updateCpu(dto)
                    .success(function () {
                        angular.noop();
                    });
            };
        }]);
