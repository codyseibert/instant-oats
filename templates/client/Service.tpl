/*jslint nomen: true */
/*global angular: false */

angular.module('YOUR_APP')
    .factory('{{name_title}}Service', ['$http', function ($http) {
        'use strict';

        return {
            get{{name_title}}: function () {
                return $http({
                    method: "GET",
                    url: "api/{{name}}"
                });
            },
            get{{name_single_title}}: function () {
                return $http({
                    method: "GET",
                    url: "api/{{name}}/:{{name_single}}Id"
                });
            },
            create{{name_single_title}}: function () {
                return $http({
                    method: "POST",
                    url: "api/{{name}}"
                });
            },
            update{{name_single_title}}: function () {
                return $http({
                    method: "POST",
                    url: "api/{{name}}"
                });
            },
            delete{{name_single_title}}: function () {
                return $http({
                    method: "DELETE",
                    url: "api/{{name}}/:{{name_single}}Id"
                });
            }
        };
    }]);
