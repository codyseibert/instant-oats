var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('./DaoHelper');

var MemsDao = function () {
    'use strict';

    this.getMem = function (pMemId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id,server_id,free,used,date, FROM mems WHERE id = ?",
            [pMemId],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.getMems = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id,server_id,free,used,date, FROM mems",
            [pMemId],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.createMem = function (pMem, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO mems (id, server_id, free, used, date, ) VALUES (?, ?, ?, ?, ?, )",
            [pMem.id, pMem.server_id, pMem.free, pMem.used, pMem.date, ],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.updateMem = function (pMemId, pMem, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE mems SET (id = ?, server_id = ?, free = ?, used = ?, date = ?, ) WHERE id = ?",
            [pMem.id, pMem.server_id, pMem.free, pMem.used, pMem.date,  pMemId],
            theDaoHelper.UPDATE,
            pCallback
        );
    };

    this.deleteMem = function (pMemId, pCallback) {
        theDaoHelper.executeQuery(
            "DELETE FROM mems WHERE id = ?",
            [pMemId],
            theDaoHelper.DELETE,
            pCallback
        );
    };
};

module.exports = new MemsDao();
