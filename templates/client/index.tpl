<!doctype html>

<html lang="en" data-framework="angularjs">
    <head>
        <meta charset="utf-8" />
        <title>YOUR_APP</title>
        <link rel="stylesheet" href="css/app.css" />
        <style>[ng-cloak] { display: none; }</style>
    </head>

    <body ng-app="YOUR_APP">

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
