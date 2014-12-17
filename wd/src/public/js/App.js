angular.module('YOUR_APP', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/servers', {
                controller: 'ServerController',
                templateUrl: 'templates/Server.tpl'
            })
            .when('/servers/:serverId', {
                controller: 'ServerController',
                templateUrl: 'templates/Servers.tpl'
            })
            .when('/cpus', {
                controller: 'CpuController',
                templateUrl: 'templates/Cpu.tpl'
            })
            .when('/cpus/:cpuId', {
                controller: 'CpuController',
                templateUrl: 'templates/Cpus.tpl'
            })
            .when('/mems', {
                controller: 'MemController',
                templateUrl: 'templates/Mem.tpl'
            })
            .when('/mems/:memId', {
                controller: 'MemController',
                templateUrl: 'templates/Mems.tpl'
            })
            .when('/nets', {
                controller: 'NetController',
                templateUrl: 'templates/Net.tpl'
            })
            .when('/nets/:netId', {
                controller: 'NetController',
                templateUrl: 'templates/Nets.tpl'
            })
            .otherwise({
                redirectTo: '/'
            });

    }])
    .run([function () {
        'use strict';

    }]);
