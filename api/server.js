const express = require('express');

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    console.log('Hello world')
})

server.post('/', (req, res) => {
    res.json(req.body)
})

module.exports = server