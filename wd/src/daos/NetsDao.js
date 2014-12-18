var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('./DaoHelper');

var NetsDao = function () {
    'use strict';

    this.getNet = function (pNetId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id,server_id,rx,tx,date, FROM nets WHERE id = ?",
            [pNetId],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.getNets = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id,server_id,rx,tx,date, FROM nets",
            [pNetId],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.createNet = function (pNet, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO nets (id, server_id, rx, tx, date, ) VALUES (?, ?, ?, ?, ?, )",
            [pNet.id, pNet.server_id, pNet.rx, pNet.tx, pNet.date, ],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.updateNet = function (pNetId, pNet, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE nets SET (id = ?, server_id = ?, rx = ?, tx = ?, date = ?, ) WHERE id = ?",
            [pNet.id, pNet.server_id, pNet.rx, pNet.tx, pNet.date,  pNetId],
            theDaoHelper.UPDATE,
            pCallback
        );
    };

    this.deleteNet = function (pNetId, pCallback) {
        theDaoHelper.executeQuery(
            "DELETE FROM nets WHERE id = ?",
            [pNetId],
            theDaoHelper.DELETE,
            pCallback
        );
    };
};

module.exports = new NetsDao();
