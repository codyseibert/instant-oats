var app = require('./App');

{{#oats}}
var {{name_title}}Controller = require ('./controllers/{{name_title}}Controller');
{{/oats}}

var Routes = function () {
    'use strict';

    {{#oats}}
    // {{name}}
    app.get('/api/{{name}}',
        {{name_title}}Controller.get{{name_title}});

    app.get('/api/{{name}}/:{{name_single}}Id',
        {{name_title}}Controller.get{{name_single_title}});

    app.post('/api/{{name}}',
        {{name_title}}Controller.create{{name_single_title}});

    app.post('/api/{{name}}/:{{name_single}}Id',
        {{name_title}}Controller.update{{name_single_title}});

    app.delete('/api/{{name}}/:{{name_single}}Id',
        {{name_title}}Controller.delete{{name_single_title}});

    {{/oats}}
};

module.exports = new Routes();
