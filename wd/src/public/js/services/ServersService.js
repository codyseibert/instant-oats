/*jslint nomen: true */
/*global angular: false */

angular.module('YOUR_APP')
    .factory('ServersService', ['$http', function ($http) {
        'use strict';

        return {
            getServers: function () {
                return $http({
                    method: "GET",
                    url: "api/servers"
                });
            },
            getServer: function () {
                return $http({
                    method: "GET",
                    url: "api/servers/:serverId"
                });
            },
            createServer: function () {
                return $http({
                    method: "POST",
                    url: "api/servers"
                });
            },
            updateServer: function () {
                return $http({
                    method: "POST",
                    url: "api/servers"
                });
            },
            deleteServer: function () {
                return $http({
                    method: "DELETE",
                    url: "api/servers/:serverId"
                });
            }
        };
    }]);
