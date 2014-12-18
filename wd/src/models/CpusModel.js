
var CpusModel = function () {
    'use strict';

    var id,server_id,percent,date,;

    this.setCpu = function (pid) {
        id = pid;
    }

    this.getCpu = function () {
        return id;
    }

    this.setCpu = function (pserver_id) {
        server_id = pserver_id;
    }

    this.getCpu = function () {
        return server_id;
    }

    this.setCpu = function (ppercent) {
        percent = ppercent;
    }

    this.getCpu = function () {
        return percent;
    }

    this.setCpu = function (pdate) {
        date = pdate;
    }

    this.getCpu = function () {
        return date;
    }

};

module.exports = new CpusModel();
