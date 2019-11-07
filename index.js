const express = require('express');
const server = express();

const { config } = require('./config/index');

server.use(express.json());

const personAPI = require('./routes/person');
const areaAPI = require('./routes/area');
const questionAPI = require('./routes/question');
const answerAPI = require('./routes/answer');
const loginAPI = require('./routes/login');

personAPI(server);
areaAPI(server);
questionAPI(server);
answerAPI(server);
loginAPI(server);

server.listen(config.port, function() {
    console.log('server is listening in http://localhost:' + config.port)
});