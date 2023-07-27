const Auto = require('./auto.model')

const getAllAutos = async () => {
    const result = await Auto.findAll();
    return result;
};

const getAutoById = async (id) => {
    const result = await Auto.findAll({
        where: {
            id
        }
    });

    return result;
};

const createAuto = async ({ year, brand, model }) => {
    try {
        const result = await Auto.create({
            year,
            brand,
            model
        });
        return result;    
    } catch (error) {
        throw error;
    }
};

const updateAuto = () => {

};

const deleteAuto = () => {

};

module.exports = {
    getAllAutos,
    getAutoById,
    createAuto,
    updateAuto,
    deleteAuto
};