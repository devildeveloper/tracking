require('newrelic');
'use strict';

const Hapi   = require('hapi');
const Server = new Hapi.Server();
const Routes = require('./Routes/Main.js');

Server.connection({port : 3000 });

//Routes
Routes(Server);
//init
Server.start( ()=>{
    console.log('Server running at:', Server.info.uri);
})
