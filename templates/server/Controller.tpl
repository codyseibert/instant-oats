var the{{name_title}}Dao = require('../dao/{{name_title}}Dao');
var theControllerHelper = require('./ControllerHelper');

var {{name_title}}Controller = function () {
    'use strict';

    this.get{{name_single_title}} = function (pReq, pRes) {
        var callback,
            {{name_single}}Id;
        {{name_single}}Id = pReq.params.{{name_single}}Id;
        callback = theControllerHelper.createDefaultCallback(pRes);
        the{{name_title}}Dao.get{{name_single_title}}({{name_single}}Id, callback);
    };

    this.get{{name_title}} = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        the{{name_title}}Dao.get{{name_title}}(callback);
    };

    this.create{{name_title}} = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        the{{name_title}}Dao.create{{name_title}}(pReq.body, callback);
    };

    this.update{{name_title}} = function (pReq, pRes) {
        var callback,
            {{name_single}}Id;
        {{name_single}}Id = pReq.params.{{name_single}}Id;
        callback = theControllerHelper.createDefaultCallback(pRes);
        the{{name_title}}Dao.update{{name_single_title}}(pReq.body, callback);
    };

    this.delete{{name_title}} = function (pReq, pRes) {
        var callback,
            {{name_single}}Id;
        {{name_single}}Id = pReq.params.{{name_single}}Id;
        callback = theControllerHelper.createDefaultCallback(pRes);
        the{{name_title}}Dao.delete{{name_title}}({{name_single}}Id, callback);
    };
};

module.exports = new {{name_title}}();
