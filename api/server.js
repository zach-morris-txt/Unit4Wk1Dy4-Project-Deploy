//Imports
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')


//Instance Of Express App
const server = express()


//Middleware Called
server.use(express.json())
server.use(cors())
server.use(morgan())


//Consuming
server.use('/api', router); 


//Endpoints
server.get('/', (req, res) => {
    res.send(
    `<h1>My Express App</h1>
    <h3>Zach Morris Was Here</h3>
    `
    )
})


//Exports; Exposing
module.exports = server;