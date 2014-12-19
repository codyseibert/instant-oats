var Mustache = require('mustache');
var changeCase = require('change-case');
var path = require('path');
var fs = require('fs');
var Q = require('q');
var FS = require('q-io/fs');

var InstantOats = function (pAppName, pOats) {
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
            src: '../templates/client/App.tpl',
            dest: './src/public/js/',
            ext: 'js'
        },
        {
            name: 'Controller',
            type: 'multi',
            src: '../templates/client/Controller.tpl',
            dest: './src/public/js/controllers/',
            ext: 'js'
        },
        {
            name: 'Service',
            type: 'multi',
            src: '../templates/client/Service.tpl',
            dest: './src/public/js/services/',
            ext: 'js'
        },

        // Server Based Templates
        {
            name: 'ControllerHelper',
            type: 'single',
            src: '../templates/server/ControllerHelper.tpl',
            dest: './src/',
            ext: 'js'
        },
        {
            name: 'DaoHelper',
            type: 'single',
            src: '../templates/server/DaoHelper.tpl',
            dest: './src/',
            ext: 'js'
        },
        {
            name: 'DBConnection',
            type: 'single',
            src: '../templates/server/DBConnection.tpl',
            dest: './src/',
            ext: 'js'
        },
        {
            name: 'Messages',
            type: 'single',
            src: '../templates/server/Messages.tpl',
            dest: './src/',
            ext: 'js'
        },
        {
            name: 'Mysql',
            type: 'single',
            src: '../templates/server/Mysql.tpl',
            dest: './db/',
            ext: 'sql'
        },
        {
            name: 'Routes',
            type: 'single',
            src: '../templates/server/Routes.tpl',
            dest: './src/',
            ext: 'js'
        },
        {
            name: 'Server',
            type: 'single',
            src: '../templates/server/Server.tpl',
            dest: './src/',
            ext: 'js'
        },
        {
            name: 'bower',
            type: 'single',
            src: '../templates/client/bower.tpl',
            dest: './src/public/',
            ext: 'json'
        },
        {
            name: 'Gruntfile',
            type: 'single',
            src: '../templates/Gruntfile.tpl',
            dest: './',
            ext: 'js'
        },
        {
            name: 'package',
            type: 'single',
            src: '../templates/package.tpl',
            dest: './',
            ext: 'json'
        },
        {
            name: 'Dao',
            type: 'multi',
            src: '../templates/server/Dao.tpl',
            dest: './src/daos/',
            ext: 'js'
        },
        {
            name: 'Controller',
            type: 'multi',
            src: '../templates/server/Controller.tpl',
            dest: './src/controllers/',
            ext: 'js'
        },
        {
            name: 'Model',
            type: 'multi',
            src: '../templates/server/Model.tpl',
            dest: './src/models/',
            ext: 'js'
        }
    ];

    var makeDirectories = function () {
        var dirs = [
            './src',
            './src/public',
            './src/public/css',
            './src/public/js',
            './src/public/js/controllers',
            './src/public/js/services',
            './src/public/templates',
            './src/public/images',
            './src/public/images/uploads',
            './db',
            './src/controllers',
            './src/daos',
            './src/models',
            './src/middleware',
            './test'
        ];

        var promise = null;
        var mkdir = function (dir) {
            if (promise) {
                promise = promise.then(function () {
                    return FS.makeDirectory(dir);
                })
            } else {
                promise = FS.makeDirectory(dir);
            }
        };

        for (var i = 0; i < dirs.length; i += 1) {
            mkdir(dirs[i]);
        }
    }

    var preprocessOats = function () {
        var i, j, members, member, oat;

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

            members = oat.members;
            for (j = 0; j < members.length; j += 1) {
                member = members[j];
                member.title = changeCase.titleCase(member.name).replace(' ', '');
                member.the_title = 'the' + member.title;

                if (j === members.length - 1) {
                    member.last = true;
                }

                if (oat.name.indexOf("id") !== -1) {
                    member.isId = true;
                }

                if (oat === "id") {
                    member.isPrimary = true;
                }

                var references = member.references;
                if (references) {
                    oat.hasReferences = true;
                    for (var k = 0; k < references.length; k += 1) {
                        var reference = references[k];
                        references[k] = {};
                        references[k].name = reference;

                        if (k === references.length - 1) {
                            references[k].last = true;
                        }
                    }
                }

                var attributes = member.attributes;
                if (attributes) {
                    for (var k = 0; k < attributes.length; k += 1) {
                        var attribute = attributes[k];
                        attributes[k] = {};
                        attributes[k].name = attribute;

                        if (k === attributes.length - 1) {
                            attributes[k].last = true;
                        }
                    }
                }
            }
        }
    };

    var processTemplateDefs = function () {
        var i, templateDef, processMulti, out;

        var processTemplate = function (pTemplateDef) {
            FS.read(pTemplateDef.src)
                .then(function (pTemplateFile){
                    var j;
                    if (pTemplateDef.type === 'single') {
                        out = Mustache.render(pTemplateFile, {oats: oats});
                        out = out.replace(/WILL_BE_REPLACED_WITH_YOUR_APP_NAME/g, pAppName);
                        var dest = pTemplateDef.dest + pTemplateDef.name + '.' +  pTemplateDef.ext;
                        FS.write(dest, out);
                    } else {
                        for (j = 0; j < oats.length; j += 1) {
                            var oat = oats[j];
                            out = Mustache.render(pTemplateFile, oat);
                            out = out.replace(/WILL_BE_REPLACED_WITH_YOUR_APP_NAME/g, pAppName);
                            var dest = pTemplateDef.dest + oat.name_title + pTemplateDef.name + '.' + pTemplateDef.ext;
                            FS.write(dest, out);
                        }
                    }
                })
                .fail(function (pErr) {
                    console.log(pErr);
                })
        };

        for (i = 0; i < templateDefs.length; i += 1) {
            processTemplate(templateDefs[i]);
        }
    };

    preprocessOats();
    makeDirectories();
    processTemplateDefs();
};

module.exports = InstantOats;
