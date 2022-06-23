const http = require('http');

const app = require('./app');

const server = http.createServer(/*SOMETHING*/);

server.listen(PORT, ()=> {
    console.log(`Listening on PORT ${PORT}...`)
})


const PORT = process.env.PORT || 8000;

