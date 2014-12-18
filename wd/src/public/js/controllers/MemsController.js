
angular.module('YOUR_APP')
    .controller('MemsController', [
        '$scope',
        '$routeParams',
        'MemsService'
        function (
        $scope,
        $routeParams,
        'MemsService'
        ) {
            'use strict';

            $scope.memId = $routeParams.memId;

            MemsService.getMems()
                .success(function (pData) {
                    $scope.mems = pData;
                });

            MemsService.getMem($scope.memId)
                .success(function (pData) {
                    angular.noop();
                });

            $scope.createMem = function () {
                var dto = {

                }
                MemsService.createMem(dto)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.deleteMem = function () {
                var yes = confirm("Are you sure you want to delete this mem?");
                if (!yes) {
                    return;
                }

                MemsService.deleteMem($scope.memId)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.updateMem = function () {
                var dto = {
                    id: = $scope.memId
                }
                MemsService.updateMem(dto)
                    .success(function () {
                        angular.noop();
                    });
            };
        }]);
