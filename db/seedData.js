const client = require('./client');

const { createAuto } = require('./autos');

// function to drop all tables
async function dropTables() {
    try {
        console.log('Starting to drop tables...');
        await client.query(`
            DROP TABLE IF EXISTS autos;
            `);
        console.log('Finished dropping tables!');
    } catch (error) {
        throw error;
    }
}

// function to create all tables
async function createTables() {
    try {
        console.log('Starting to build tables...');
        // build autos table with id, year, brand, and model
        await client.query(`
            CREATE TABLE autos (
                id SERIAL PRIMARY KEY,
                year INTEGER NOT NULL,
                brand VARCHAR(255) NOT NULL,
                model VARCHAR(255) NOT NULL,
                created_at TIMESTAMP,
                updated_at TIMESTAMP
            );
            `);
        console.log('Finished building tables!');
    } catch (error) {
        throw error;
    }
}

// function to create initial data
async function createInitialData() {
    try {
        console.log('Starting to create initial data...');
        // create autos
        await createAuto({ year: 2019, brand: 'Toyota', model: 'Camry' });
        await createAuto({ year: 2018, brand: 'Honda', model: 'Accord' });
        await createAuto({ year: 2017, brand: 'Ford', model: 'Fusion' });
        console.log('Finished creating initial data!');
    } catch (error) {
        throw error;
    }
}

// function to rebuild database
async function rebuildDB() {
    try {
        client.connect();
        await dropTables();
        await createTables();
        await createInitialData();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    rebuildDB
};