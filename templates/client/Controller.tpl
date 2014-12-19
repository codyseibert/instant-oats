
angular.module('WILL_BE_REPLACED_WITH_YOUR_APP_NAME')
    .controller('{{name_title}}Controller', [
        '$scope',
        '{{name_title}}Service',
        function (
        $scope,
        {{name_title}}Service
        ) {
            'use strict';

            $scope.{{name_single}} = {};

            {{name_title}}Service.get{{name_title}}()
                .success(function (pData) {
                    $scope.{{name}} = pData;
                });

            /*
            {{name_title}}Service.get{{name_single_title}}()
                .success(function (pData) {
                    // Not used in generated templates
                    angular.noop();
                });
            */

            $scope.create{{name_single_title}} = function () {
                {{name_title}}Service.create{{name_single_title}}($scope.{{name_single}})
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.delete{{name_single_title}} = function (p{{name_single_title}}) {
                var yes = confirm("Are you sure you want to delete this {{name_single}}?");
                if (!yes) {
                    return;
                }

                {{name_title}}Service.delete{{name_single_title}}(p{{name_single_title}}.id)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.update{{name_single_title}} = function (p{{name_single_title}}) {
                {{name_title}}Service.update{{name_single_title}}(p{{name_single_title}})
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.edit = function (p{{name_single_title}}) {
                p{{name_single_title}}.isEditMode = true;
            };
        }]);
