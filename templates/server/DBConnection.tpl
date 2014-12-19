var mysql = require('mysql');

var DBConnection = function () {
    'use strict';

    var connection;

    connection = mysql.createConnection({
        host: 'localhost',
        database: 'WILL_BE_REPLACED_WITH_YOUR_APP_NAME',
        user: 'root',
        password: 'YOUR_PASSWORD'
    });
    connection.connect();

    return connection;
};

module.exports = new DBConnection();
