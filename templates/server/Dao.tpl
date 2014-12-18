var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('./DaoHelper');

var {{name_title}}Dao = function () {
    'use strict';

    this.get{{name_single_title}} = function (p{{name_single_title}}Id, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT {{#members}}{{name}},{{/members}} FROM {{name}} WHERE id = ?",
            [p{{name_single_title}}Id],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.get{{name_title}} = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT {{#members}}{{name}},{{/members}} FROM {{name}}",
            [p{{name_single_title}}Id],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.create{{name_single_title}} = function (p{{name_single_title}}, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO {{name}} ({{#members}}{{name}}, {{/members}}) VALUES ({{#members}}?, {{/members}})",
            [{{#members}}p{{name_single_title}}.{{name}}, {{/members}}],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.update{{name_single_title}} = function (p{{name_single_title}}Id, p{{name_single_title}}, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE {{name}} SET ({{#members}}{{name}} = ?, {{/members}}) WHERE id = ?",
            [{{#members}}p{{name_single_title}}.{{name}}, {{/members}} p{{name_single_title}}Id],
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
