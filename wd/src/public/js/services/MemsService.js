/*jslint nomen: true */
/*global angular: false */

angular.module('YOUR_APP')
    .factory('MemsService', ['$http', function ($http) {
        'use strict';

        return {
            getMems: function () {
                return $http({
                    method: "GET",
                    url: "api/mems"
                });
            },
            getMem: function () {
                return $http({
                    method: "GET",
                    url: "api/mems/:memId"
                });
            },
            createMem: function () {
                return $http({
                    method: "POST",
                    url: "api/mems"
                });
            },
            updateMem: function () {
                return $http({
                    method: "POST",
                    url: "api/mems"
                });
            },
            deleteMem: function () {
                return $http({
                    method: "DELETE",
                    url: "api/mems/:memId"
                });
            }
        };
    }]);
