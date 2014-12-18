
var ServersModel = function () {
    'use strict';

    var id,ip,host,;

    this.setServer = function (pid) {
        id = pid;
    }

    this.getServer = function () {
        return id;
    }

    this.setServer = function (pip) {
        ip = pip;
    }

    this.getServer = function () {
        return ip;
    }

    this.setServer = function (phost) {
        host = phost;
    }

    this.getServer = function () {
        return host;
    }

};

module.exports = new ServersModel();
