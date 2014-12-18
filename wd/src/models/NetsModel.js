
var NetsModel = function () {
    'use strict';

    var id,server_id,rx,tx,date,;

    this.setNet = function (pid) {
        id = pid;
    }

    this.getNet = function () {
        return id;
    }

    this.setNet = function (pserver_id) {
        server_id = pserver_id;
    }

    this.getNet = function () {
        return server_id;
    }

    this.setNet = function (prx) {
        rx = prx;
    }

    this.getNet = function () {
        return rx;
    }

    this.setNet = function (ptx) {
        tx = ptx;
    }

    this.getNet = function () {
        return tx;
    }

    this.setNet = function (pdate) {
        date = pdate;
    }

    this.getNet = function () {
        return date;
    }

};

module.exports = new NetsModel();
