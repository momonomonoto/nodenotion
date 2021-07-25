require('dotenv').config()
const restify = require('restify');
const server = restify.createServer();
const cool = require('cool-ascii-faces');


const getRealizeTickets = require('./api/get-realized-tickets');

server.get('/ticket', getRealizeTickets);
server.get('/cool', (req, res, next) => res.send(cool()));

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
