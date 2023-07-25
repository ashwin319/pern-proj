const express = require('express');
const router = express.Router();
const { getAllAutos, getAutoById, createAuto, updateAuto, deleteAuto } = require('../db');

// GET - /api/autos - returns a list of autos - PUBLIC
router.get('/', async (req, res, next) => {
    try {
        const autos = await getAllAutos();

        res.send(autos);
    } catch (error) {
        next(error);
    }
});

// GET - /api/autos/:id - returns a single auto by id - PUBLIC
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    try {
        const auto = await getAutoById(id);

        res.send(auto);
    } catch (error) {
        next(error);
    }
});


// POST - /api/autos - creates a new auto - PUBLIC
router.post('/', async (req, res, next) => {
    const { year, brand, model } = req.body;

    try {
        const auto = await createAuto({ year, brand, model });

        res.send(auto);
    } catch (error) {
        next(error);
    }
});

// PATCH - /api/autos/:id - updates an auto by id - PUBLIC
router.patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { year, brand, model } = req.body;

    try {
        const auto = await updateAuto({ id, year, brand, model });

        res.send(auto);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/autos/:id - deletes an auto by id - PUBLIC
router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;

    try {
        const auto = await deleteAuto(id); // Pass the ID directly, not as an object

        res.send(auto);
    } catch (error) {
        next(error);
    }
});


module.exports = router;
