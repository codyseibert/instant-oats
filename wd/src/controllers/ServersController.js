
angular.module('YOUR_APP')
    .controller('ServersController', [
        '$scope',
        '$routeParams',
        'ServersService'
        function (
        $scope,
        $routeParams,
        'ServersService'
        ) {
            'use strict';

            $scope.serverId = $routeParams.serverId;

            ServersService.getServers()
                .success(function (pData) {
                    $scope.servers = pData;
                });

            ServersService.getServer($scope.serverId)
                .success(function (pData) {
                    angular.noop();
                });

            $scope.createServer = function () {
                var dto = {

                }
                ServersService.createServer(dto)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.deleteServer = function () {
                var yes = confirm("Are you sure you want to delete this server?");
                if (!yes) {
                    return;
                }

                ServersService.deleteServer($scope.serverId)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.updateServer = function () {
                var dto = {
                    id: = $scope.serverId
                }
                ServersService.updateServer(dto)
                    .success(function () {
                        angular.noop();
                    });
            };
        }]);
