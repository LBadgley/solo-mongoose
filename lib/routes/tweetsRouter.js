const { Router } = require('express');
const Tweet = require('../models/Tweet');


module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      handle,
      body
    } = req.body;

    Tweet 
      .create({ handle, body })
      .then(created)
  })