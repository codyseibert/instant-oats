var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('./DaoHelper');

var {{name_title}}Dao = function () {
    'use strict';

    this.get{{name_single_title}} = function (p{{name_single_title}}Id, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT {{#members}}{{name}}{{^last}}, {{/last}}{{/members}} FROM {{name}} WHERE id = ?",
            [p{{name_single_title}}Id],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.get{{name_title}} = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT {{#members}}{{name}}{{^last}}, {{/last}}{{/members}} FROM {{name}}",
            [],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.create{{name_single_title}} = function (p{{name_single_title}}, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO {{name}} ({{#members}}{{^isPrimary}}{{name}}{{^last}}, {{/last}}{{/isPrimary}}{{/members}}) VALUES ({{#members}}{{^isPrimary}}?{{^last}}, {{/last}}{{/isPrimary}}{{/members}})",
            [{{#members}}{{^isPrimary}}p{{name_single_title}}.{{name}}{{^last}}, {{/last}}{{/isPrimary}}{{/members}}],
            theDaoHelper.INSERT,
            pCallback
        );
    };

    this.update{{name_single_title}} = function (p{{name_single_title}}, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE {{name}} SET {{#members}}{{^isId}}{{name}} = ?{{^last}}, {{/last}}{{/isId}}{{/members}} WHERE id = ?",
            [{{#members}}{{^isId}}p{{name_single_title}}.{{name}}{{^last}}, {{/last}}{{/isId}}{{/members}}, p{{name_single_title}}.id],
            theDaoHelper.UPDATE,
            pCallback
        );
    };

    this.delete{{name_single_title}} = function (p{{name_single_title}}Id, pCallback) {
        theDaoHelper.executeQuery(
            "DELETE FROM {{name}} WHERE id = ?",
            [p{{name_single_title}}Id],
            theDaoHelper.DELETE,
            pCallback
        );
    };
};

module.exports = new {{name_title}}Dao();
