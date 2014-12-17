var app = require('./App');

var serversController = require ('./controllers/serversController')var cpusController = require ('./controllers/cpusController')var memsController = require ('./controllers/memsController')var netsController = require ('./controllers/netsController')

var Routes = function () {
    'use strict';

    // servers
    app.get('/api/servers',
        serversController.getServers);

    app.get('/api/servers/:serverId',
        serversController.getServer);

    app.post('/api/servers/:serverId',
        serversController.createServer);

    app.post('/api/servers',
        serversController.updateServer);

    app.delete('/api/servers/:serverId',
        serversController.deleteServer);

    // cpus
    app.get('/api/cpus',
        cpusController.getCpus);

    app.get('/api/cpus/:cpuId',
        cpusController.getCpu);

    app.post('/api/cpus/:cpuId',
        cpusController.createCpu);

    app.post('/api/cpus',
        cpusController.updateCpu);

    app.delete('/api/cpus/:cpuId',
        cpusController.deleteCpu);

    // mems
    app.get('/api/mems',
        memsController.getMems);

    app.get('/api/mems/:memId',
        memsController.getMem);

    app.post('/api/mems/:memId',
        memsController.createMem);

    app.post('/api/mems',
        memsController.updateMem);

    app.delete('/api/mems/:memId',
        memsController.deleteMem);

    // nets
    app.get('/api/nets',
        netsController.getNets);

    app.get('/api/nets/:netId',
        netsController.getNet);

    app.post('/api/nets/:netId',
        netsController.createNet);

    app.post('/api/nets',
        netsController.updateNet);

    app.delete('/api/nets/:netId',
        netsController.deleteNet);

};

module.exports = new Routes();
