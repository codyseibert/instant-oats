angular.module('WILL_BE_REPLACED_WITH_YOUR_APP_NAME', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';

        $routeProvider
            {{#oats}}
            .when('/{{name}}', {
                controller: '{{name_title}}Controller',
                templateUrl: 'templates/{{name_title}}Template.tpl'
            })
            {{/oats}}
            .otherwise({
                redirectTo: '/'
            });

    }])
    .run([function () {
        'use strict';

    }]);
