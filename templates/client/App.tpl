angular.module('YOU_APP', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'templates/Login.tpl'
            })
            .otherwise({
                redirectTo: '/'
            });

    }])
    .run([function () {
        'use strict';

    }]);
