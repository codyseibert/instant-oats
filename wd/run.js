var FS = require('q-io/fs');
var Q = require('q');
var instantOats = require('../src/instant-oats');

var oats = null;

FS.read('./oats.json')
    .then(function (pData) {
        oats = JSON.parse(pData);
    })
    .fail(function (pError) {
        console.log(pError);
    })
    .then(function (pContent) {
        instantOats({
            oats: oats
        });
    });
