<!doctype html>

<html lang="en" data-framework="angularjs">
    <head>
        <meta charset="utf-8" />
        <title>WILL_BE_REPLACED_WITH_YOUR_APP_NAME</title>
        <link rel="stylesheet" href="css/app.css" />
        <style>[ng-cloak] { display: none; }</style>
    </head>

    <body ng-app="WILL_BE_REPLACED_WITH_YOUR_APP_NAME">

        <ng-view autoscroll="true" />

        <!-- bower:js -->
        <script src="bower_components/angular/angular.js"></script>
        <!-- endbower -->

        <script src="js/app.js"></script>


        <!-- build:remove -->
            <!-- Controllers -->
            {{#oats}}
            <script src="js/controllers/{{name_single_title}}Controller.js"></script>
            {{/oats}}
            <!-- Directives -->

            <!-- Services -->
            {{#oats}}
            <script src="js/services/{{name_single_title}}Service.js"></script>
            {{/oats}}
        <!-- /build -->
    </body>
</html>
