// import dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const client = require('./db/client');


// name a port
const PORT = 8080;

// create express app
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// enable cors
app.use(cors());


// connect to pg client
client.connect();



// define a root route
app.get('/health', (req, res) => {
    res.send('I AM ALIVE👍');
});


// ROUTER: /api/autos
const autosRouter = require('./api/autos');
app.use('/api/autos', autosRouter);

// listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


