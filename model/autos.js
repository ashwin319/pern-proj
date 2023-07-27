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

const createAuto = () => {

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