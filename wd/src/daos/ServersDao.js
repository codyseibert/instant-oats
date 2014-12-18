var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('./DaoHelper');

var ServersDao = function () {
    'use strict';

    this.getServer = function (pServerId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id,ip,host, FROM servers WHERE id = ?",
            [pServerId],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.getServers = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id,ip,host, FROM servers",
            [pServerId],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.createServer = function (pServer, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO servers (id, ip, host, ) VALUES (?, ?, ?, )",
            [pServer.id, pServer.ip, pServer.host, ],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.updateServer = function (pServerId, pServer, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE servers SET (id = ?, ip = ?, host = ?, ) WHERE id = ?",
            [pServer.id, pServer.ip, pServer.host,  pServerId],
            theDaoHelper.UPDATE,
            pCallback
        );
    };

    this.deleteServer = function (pServerId, pCallback) {
        theDaoHelper.executeQuery(
            "DELETE FROM servers WHERE id = ?",
            [pServerId],
            theDaoHelper.DELETE,
            pCallback
        );
    };
};

module.exports = new ServersDao();
