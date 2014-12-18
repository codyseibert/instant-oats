/*jslint nomen: true */
/*global angular: false */

angular.module('YOUR_APP')
    .factory('NetsService', ['$http', function ($http) {
        'use strict';

        return {
            getNets: function () {
                return $http({
                    method: "GET",
                    url: "api/nets"
                });
            },
            getNet: function () {
                return $http({
                    method: "GET",
                    url: "api/nets/:netId"
                });
            },
            createNet: function () {
                return $http({
                    method: "POST",
                    url: "api/nets"
                });
            },
            updateNet: function () {
                return $http({
                    method: "POST",
                    url: "api/nets"
                });
            },
            deleteNet: function () {
                return $http({
                    method: "DELETE",
                    url: "api/nets/:netId"
                });
            }
        };
    }]);
