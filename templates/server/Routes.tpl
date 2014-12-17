var app = require('./App');

{{#oats}}var {{name}}Controller = require ('./controllers/{{name}}Controller'){{/oats}}

var Routes = function () {
    'use strict';

    {{#oats}}
    // {{name}}
    app.get('/api/{{name}}',
        {{name}}Controller.get{{name_title}});

    app.get('/api/{{name}}/:{{name_single}}Id',
        {{name}}Controller.get{{name_single_title}});

    app.post('/api/{{name}}/:{{name_single}}Id',
        {{name}}Controller.create{{name_single_title}});

    app.post('/api/{{name}}',
        {{name}}Controller.update{{name_single_title}});

    app.delete('/api/{{name}}/:{{name_single}}Id',
        {{name}}Controller.delete{{name_single_title}});

    {{/oats}}
};

module.exports = new Routes();
