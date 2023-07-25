const client = require('./client');

// function to create a new auto
async function createAuto({ year, brand, model }) {
    try {
        const { rows: [auto] } = await client.query(`
            INSERT INTO autos(year, brand, model)
            VALUES ($1, $2, $3);
            `, [year, brand, model]);

        return auto;
    } catch (error) {
        throw error;
    }
}

// export modules
module.exports = {
    createAuto
};