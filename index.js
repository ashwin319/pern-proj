// import dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

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

// define a root route
app.get('/health', (req, res) => {
    res.send('I AM ALIVE👍');
});

// listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


