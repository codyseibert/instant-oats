/*jslint nomen: true */
/*global angular: false */

angular.module('YOUR_APP')
    .factory('CpusService', ['$http', function ($http) {
        'use strict';

        return {
            getCpus: function () {
                return $http({
                    method: "GET",
                    url: "api/cpus"
                });
            },
            getCpu: function () {
                return $http({
                    method: "GET",
                    url: "api/cpus/:cpuId"
                });
            },
            createCpu: function () {
                return $http({
                    method: "POST",
                    url: "api/cpus"
                });
            },
            updateCpu: function () {
                return $http({
                    method: "POST",
                    url: "api/cpus"
                });
            },
            deleteCpu: function () {
                return $http({
                    method: "DELETE",
                    url: "api/cpus/:cpuId"
                });
            }
        };
    }]);
