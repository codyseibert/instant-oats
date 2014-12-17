
var {{name_title}}Model = function () {
    'use strict';

    var {{#members}}{{name}},{{/members}};

    {{#members}}
    this.set{{name_single_title}} = function (p{{name}}) {
        {{name}} = p{{name}};
    }

    this.get{{name_single_title}} = function () {
        return {{name}};
    }

    {{/members}}
};

module.exports = new {{name_title}}Model();
