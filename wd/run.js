var FS = require('q-io/fs');
var Q = require('q');
var instantOats = require('../src/instant-oats');

FS.read('./oats.json')
    .then(function (pData) {
        instantOats("stethoscope", JSON.parse(pData));
    })
    .fail(function (pError) {
        console.log(pError);
    });
