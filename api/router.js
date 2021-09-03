//Imports
const express = require('express');


//Minature Instance Of Express Server W/ Router
const router = express.Router();


//Endpoints
router.get('/users', (req, res) => {
    res.send(
    `<h1>My Express App</h1>
    <h2>Users:</h2>
    <h3>H.G. Wells</h3>
    <h3>Orson Scott Card</h3>
    <h3>Leo Tolstoy</h3>
    <h3>Aleksandr Solzhenitsyn</h3>
    `
    )
})
router.post('/register', (req, res) => {
    res.send(
    `<h1>My Express App</h1>
    <h2>User: H.G. Wells</h2>
    <h3>Username: hgwells</h3>
    <h3>Password: 123ABC</h3>
    `
    )
})
router.post('/login', (req, res) => {
    res.send(
    `<h1>My Express App</h1>
    <h2>User: H.G. Wells</h2>
    <h3>Welcome Wells!</h3>
    `
    )
})

//Anonymous Error-Handling Middleware
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    custom: 'Something Went Wrong In Router',
    message: err.message,
    stack: err.stack,
  })
})


//Exports; Exposing
module.exports = router;