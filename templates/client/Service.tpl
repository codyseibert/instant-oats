
angular.module('WILL_BE_REPLACED_WITH_YOUR_APP_NAME')
    .factory('{{name_title}}Service', ['$http', function ($http) {
        'use strict';

        return {
            get{{name_title}}: function () {
                return $http({
                    method: "GET",
                    url: "api/{{name}}"
                });
            },
            get{{name_single_title}}: function (p{{name_single_title}}Id) {
                return $http({
                    method: "GET",
                    url: "api/{{name}}/" + p{{name_single_title}}Id
                });
            },
            create{{name_single_title}}: function (p{{name_single_title}}) {
                return $http({
                    method: "POST",
                    url: "api/{{name}}",
                    data: p{{name_single_title}}
                });
            },
            update{{name_single_title}}: function (p{{name_single_title}}) {
                return $http({
                    method: "POST",
                    url: "api/{{name}}",
                    data: p{{name_single_title}}
                });
            },
            delete{{name_single_title}}: function (p{{name_single_title}}Id) {
                return $http({
                    method: "DELETE",
                    url: "api/{{name}}/" + p{{name_single_title}}Id
                });
            }
        };
    }]);
