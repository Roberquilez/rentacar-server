import { getAlquileres, addAlquileres, getAlquileresById, updateAlquiler, deleteAlquiler } from '../models/data.js';

// Obtener todos los alquileres
async function getAllAlquileres(req, res) {
    try {
        const alquileres = await getAlquileres();
        res.json(alquileres);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Obtener un alquiler por ID
async function getAlquilerById(req, res) {
    try {
        const { id } = req.params;
        const alquiler = await getAlquileresById(id);
        if (!alquiler) {
            return res.status(404).send('Alquiler no encontrado');
        }
        res.json(alquiler);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Crear un nuevo alquiler
async function createAlquiler(req, res) {
    try {
        const newAlquiler = req.body;
        await addAlquileres(newAlquiler);
        res.status(201).send('Alquiler creado');
    } catch (error) {
        res.status(500).send(error.message);
    }
}
// Actualizar un alquiler existente
async function updateAlquilerDetails(req, res) {
    try {
        const { id } = req.params;
        const alquilerData = req.body;
        await updateAlquiler(id, alquilerData);
        res.send('Alquiler actualizado');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Eliminar un alquiler
async function deleteAlquilerDetails(req, res) {
    try {
        const { id } = req.params;
        await deleteAlquiler(id);
        res.send('Alquiler eliminado');
    } catch (error) {
        res.status(500).send(error.message);
    }
}