const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {

    let successMessage = {
        message: 'Success'
    }

    res.send(successMessage)
})

// POST
koalaRouter.post('/', (req, res) => {

    console.log(req.body);

    res.sendStatus(200)
})

// PUT


// DELETE

module.exports = koalaRouter;