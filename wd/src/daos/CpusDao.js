var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('./DaoHelper');

var CpusDao = function () {
    'use strict';

    this.getCpu = function (pCpuId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id,server_id,percent,date, FROM cpus WHERE id = ?",
            [pCpuId],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.getCpus = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id,server_id,percent,date, FROM cpus",
            [pCpuId],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.createCpu = function (pCpu, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO cpus (id, server_id, percent, date, ) VALUES (?, ?, ?, ?, )",
            [pCpu.id, pCpu.server_id, pCpu.percent, pCpu.date, ],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.updateCpu = function (pCpuId, pCpu, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE cpus SET (id = ?, server_id = ?, percent = ?, date = ?, ) WHERE id = ?",
            [pCpu.id, pCpu.server_id, pCpu.percent, pCpu.date,  pCpuId],
            theDaoHelper.UPDATE,
            pCallback
        );
    };

    this.deleteCpu = function (pCpuId, pCallback) {
        theDaoHelper.executeQuery(
            "DELETE FROM cpus WHERE id = ?",
            [pCpuId],
            theDaoHelper.DELETE,
            pCallback
        );
    };
};

module.exports = new CpusDao();
