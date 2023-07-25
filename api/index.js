const express = require('express');
const router = express.Router();

const client = require('../db/client');

// ROUTER: /api/autos
const autosRouter = require('./autos');
router.use('/autos', autosRouter);

module.exports = router;