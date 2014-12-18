
var MemsModel = function () {
    'use strict';

    var id,server_id,free,used,date,;

    this.setMem = function (pid) {
        id = pid;
    }

    this.getMem = function () {
        return id;
    }

    this.setMem = function (pserver_id) {
        server_id = pserver_id;
    }

    this.getMem = function () {
        return server_id;
    }

    this.setMem = function (pfree) {
        free = pfree;
    }

    this.getMem = function () {
        return free;
    }

    this.setMem = function (pused) {
        used = pused;
    }

    this.getMem = function () {
        return used;
    }

    this.setMem = function (pdate) {
        date = pdate;
    }

    this.getMem = function () {
        return date;
    }

};

module.exports = new MemsModel();
