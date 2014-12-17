
angular.module('YOUR_APP')
    .controller('{{name_title}}Controller', [
        '$scope',
        '{{name_title}}Service'
        function (
        $scope,
        '{{name_title}}Service'
        ) {
            'use strict';

            '{{name_title}}Service'.get{{name_title}}()
                .success(function () {
                    angular.noop();
                });

            '{{name_title}}Service'.get{{name_single_title}}(THE_ID)
                .success(function () {
                    angular.noop();
                });

            $scope.create{{name_single_title}} = function () {
                '{{name_title}}Service'.create{{name_single_title}}(YOUR_DTO)
                .success(function () {
                    angular.noop();
                });
            };

            $scope.delete{{name_title}} = function () {
                '{{name_title}}Service'.create{{name_single_title}}(THE_ID)
                .success(function () {
                    angular.noop();
                });
            };

            $scope.update{{name_title}} = function () {
                '{{name_title}}Service'.update{{name_single_title}}(THE_DTO)
                .success(function () {
                    angular.noop();
                });
            };
        }]);
