// src/routes/vehiculosRoutes.js
import express from 'express';
import { getAllVehiculos, getVehiculoById, createVehiculo, updateVehiculo, deleteVehiculo } from '../controllers/vehiculosController.js';

const router = express.Router();

router.get('/', getAllVehiculos);