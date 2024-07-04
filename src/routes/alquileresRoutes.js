import express from 'express';
import {
    getAllAlquileres,
    getAlquilerById,
    createAlquiler,
    updateAlquiler,
    deleteAlquiler
} from '../controllers/alquileresController.js';

const router = express.Router();

// Obtener todos los alquileres
router.get('/', getAllAlquileres);

// Obtener un alquiler por ID
router.get('/:id', getAlquilerById);

// Crear un nuevo alquiler
router.post('/', createAlquiler);

// Actualizar un alquiler existente
router.put('/:id', updateAlquiler);

// Eliminar un alquiler
router.delete('/:id', deleteAlquiler);

export default router;