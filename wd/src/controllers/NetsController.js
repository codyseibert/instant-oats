
angular.module('YOUR_APP')
    .controller('NetsController', [
        '$scope',
        '$routeParams',
        'NetsService'
        function (
        $scope,
        $routeParams,
        'NetsService'
        ) {
            'use strict';

            $scope.netId = $routeParams.netId;

            NetsService.getNets()
                .success(function (pData) {
                    $scope.nets = pData;
                });

            NetsService.getNet($scope.netId)
                .success(function (pData) {
                    angular.noop();
                });

            $scope.createNet = function () {
                var dto = {

                }
                NetsService.createNet(dto)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.deleteNet = function () {
                var yes = confirm("Are you sure you want to delete this net?");
                if (!yes) {
                    return;
                }

                NetsService.deleteNet($scope.netId)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.updateNet = function () {
                var dto = {
                    id: = $scope.netId
                }
                NetsService.updateNet(dto)
                    .success(function () {
                        angular.noop();
                    });
            };
        }]);
