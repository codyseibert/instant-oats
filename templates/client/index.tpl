<!doctype html>

<html lang="en" data-framework="angularjs">
    <head>
        <meta charset="utf-8" />
        <title>WILL_BE_REPLACED_WITH_YOUR_APP_NAME</title>
        <link rel="stylesheet" href="css/app.css" />
        <style>[ng-cloak] { display: none; }</style>
    </head>

    <body ng-app="WILL_BE_REPLACED_WITH_YOUR_APP_NAME">

        {{#oats}}
        <a href="#/{{name}}">{{name}}</a>
        {{/oats}}

        <ng-view autoscroll="true" />

        <!-- bower:js -->
        <script src="bower_components/angular/angular.js"></script>
        <script src="bower_components/angular-cookies/angular-cookies.js"></script>
        <script src="bower_components/angular-route/angular-route.js"></script>
        <script src="bower_components/moment/moment.js"></script>
        <script src="bower_components/Chart.js/Chart.min.js"></script>
        <script src="bower_components/angular-chart.js/dist/angular-chart.js"></script>
        <script src="bower_components/angular-foundation/mm-foundation-tpls.js"></script>
        <!-- endbower -->

        <script src="js/app.js"></script>


        <!-- build:remove -->
            <!-- Controllers -->
            {{#oats}}
            <script src="js/controllers/{{name_title}}Controller.js"></script>
            {{/oats}}
            <!-- Directives -->

            <!-- Services -->
            {{#oats}}
            <script src="js/services/{{name_title}}Service.js"></script>
            {{/oats}}
        <!-- /build -->
    </body>
</html>
