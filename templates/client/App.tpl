angular.module('YOUR_APP', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';

        $routeProvider
            {{#oats}}
            .when('/{{name}}', {
                controller: '{{name_single_title}}Controller',
                templateUrl: 'templates/{{name_single_title}}.tpl'
            })
            .when('/{{name}}/:{{name_single}}Id', {
                controller: '{{name_single_title}}Controller',
                templateUrl: 'templates/{{name_title}}.tpl'
            })
            {{/oats}}
            .otherwise({
                redirectTo: '/'
            });

    }])
    .run([function () {
        'use strict';

    }]);
