
var {{name_title}}Model = function () {
    'use strict';

    var {{#members}}{{the_title}}{{^last}}, {{/last}}{{/members}};

    {{#members}}
    this.set{{title}} = function (p{{title}}) {
        {{the_title}} = p{{title}};
    }

    this.get{{title}} = function () {
        return {{the_title}};
    }

    {{/members}}
};

module.exports = {{name_title}}Model();
