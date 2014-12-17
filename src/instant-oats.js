var Mustache = require('mustache');
var changeCase = require('change-case');
var path = require('path');
var fs = require('fs');
var Q = require('q');
var FS = require('q-io/fs');

var InstantOats = function (pOats) {
    'use strict';

    var oats,
        singles,
        multis;

    oats = pOats;

    var templateDefs = [

        // Client Based Templates
        {
            name: 'App',
            type: 'single',
            src: '../templates/client/App.tpl'
            dest: './src/public/js/'
        },
        {
            name: 'Controller',
            type: 'multi',
            src: '../templates/client/Controller.tpl'
            dest: './src/public/js/controllers/'
        },
        {
            name: 'Service',
            type: 'multi',
            src: '../templates/client/Service.tpl'
            dest: './src/public/js/services/'
        },

        // Server Based Templates
        {
            name: 'ControllerHelper',
            type: 'single',
            src: '../templates/server/ControllerHelper.tpl'
            dest: './src/'
        },
        {
            name: 'DaoHelper',
            type: 'single',
            src: '../templates/server/DaoHelper.tpl'
            dest: './src/'
        },
        {
            name: 'DBConnection',
            type: 'single',
            src: '../templates/server/DBConnection.tpl'
            dest: './src/'
        },
        {
            name: 'Messages',
            type: 'single',
            src: '../templates/server/Messages.tpl'
            dest: './src/'
        },
        {
            name: 'Mysql',
            type: 'single',
            src: '../templates/server/Mysql.tpl'
            dest: './db/'
        },
        {
            name: 'Routes',
            type: 'single',
            src: '../templates/server/Routes.tpl'
            dest: './src/'
        },
        {
            name: 'Server',
            type: 'single',
            src: '../templates/server/Server.tpl'
            dest: './src/'
        },
        {
            name: 'Dao',
            type: 'multi',
            src: '../templates/client/Dao.tpl'
            dest: './src/daos/'
        },
        {
            name: 'Controller',
            type: 'multi',
            src: '../templates/client/Controller.tpl'
            dest: './src/controllers/'
        },
        {
            name: 'Model',
            type: 'multi',
            src: '../templates/server/Model.tpl'
            dest: './src/models'
        },
    ];

    var makeDirectories = function () {
        fs.mkdir('./src');
        fs.mkdir('./src/public');
        fs.mkdir('./src/public/css');
        fs.mkdir('./src/public/js');
        fs.mkdir('./src/public/js/controllers');
        fs.mkdir('./src/public/js/services');
        fs.mkdir('./src/public/templates');
        fs.mkdir('./src/public/images');
        fs.mkdir('./src/public/images/uploads');
        fs.mkdir('./db');
        fs.mkdir('./src/controllers');
        fs.mkdir('./src/daos');
        fs.mkdir('./src/models');
        fs.mkdir('./src/middleware');
        fs.mkdir('./test');
    }

    var preprocessOats = function () {
        var i, oat;

        for (i = 0; i < oats.length; i += 1) {
            oat = oats[i];
            oat.name_single = (function () {
                var name = oat.name;
                if (name.charAt(name.length - 1) === 's') {
                    return name.substring(0, name.length - 1);
                }
                return name;
            }());
            oat.name_title = (function () {
                return changeCase.titleCase(oat.name);
            }());
            oat.name_single_title = (function () {
                return changeCase.titleCase(oat.name_single);
            }());
        }
    };

    var processTemplateDefs = function () {
        var i, templateDef, processMulti, out;
        for (i = 0; i < templateDefs.length; i += 1) {
            templateDef = templateDefs[i];

            if (templateDef.type === "single") {
                out = Mustache.render(template, {oats: oats});
            } else {
                for (i = 0; i < oats.length; i += 1) {
                    oat = oats[i];
                    out = Mustache.render(template, oat);
                }
            }

            var dest = templateDef.dest + templateDef.name + '.js';
            //fs.writeFile(templateDef.dest + templateDef.name + '.js');
            console.log(dest);

            fs.writeFile(dest, out, function (pErr) {
                console.log(pErr);
            });
        }
    };

    preprocessOats();
    processTemplateDefs();
};

module.exports = InstantOats;
