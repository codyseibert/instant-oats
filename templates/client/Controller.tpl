
angular.module('YOUR_APP')
    .controller('{{name_title}}Controller', [
        '$scope',
        '$routeParams',
        '{{name_title}}Service'
        function (
        $scope,
        $routeParams,
        '{{name_title}}Service'
        ) {
            'use strict';

            $scope.{{name_single}}Id = $routeParams.{{name_single}}Id;

            {{name_title}}Service.get{{name_title}}()
                .success(function (pData) {
                    $scope.{{name}} = pData;
                });

            {{name_title}}Service.get{{name_single_title}}($scope.{{name_single}}Id)
                .success(function (pData) {
                    angular.noop();
                });

            $scope.create{{name_single_title}} = function () {
                var dto = {

                }
                {{name_title}}Service.create{{name_single_title}}(dto)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.delete{{name_single_title}} = function () {
                var yes = confirm("Are you sure you want to delete this {{name_single}}?");
                if (!yes) {
                    return;
                }

                {{name_title}}Service.delete{{name_single_title}}($scope.{{name_single}}Id)
                    .success(function () {
                        angular.noop();
                    });
            };

            $scope.update{{name_single_title}} = function () {
                var dto = {
                    id: = $scope.{{name_single}}Id
                }
                {{name_title}}Service.update{{name_single_title}}(dto)
                    .success(function () {
                        angular.noop();
                    });
            };
        }]);
