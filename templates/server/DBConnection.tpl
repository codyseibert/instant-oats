var mysql = require('mysql');

var DBConnection = function () {
    'use strict';

    var connection;

    connection = mysql.createConnection({
        host: 'host',
        database: 'database',
        user: 'user',
        password: 'password'
    });
    connection.connect();

    return connection;
};

module.exports = new DBConnection();
