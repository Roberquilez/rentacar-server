// src/controllers/vehiculosController.js
import { getVehiculos, addVehiculos, getVehiculoByClienteId, updateVehiculo as updateVehiculoModel, deleteVehiculo as deleteVehiculoModel } from '../models/data.js';

async function getAllVehiculos(req, res) {
    try {
        const vehiculos = await getVehiculos();
        res.json(vehiculos);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getVehiculoById(req, res) {
    try {
        const { idCliente } = req.params;
        const vehiculo = await getVehiculoByClienteId(idCliente);
        if (!vehiculo) {
            return res.status(404).send('Vehículo no encontrado');
        }
        res.json(vehiculo);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function createVehiculo(req, res) {
    try {
        const newVehiculo = req.body;
        await addVehiculos(newVehiculo);
        res.status(201).send('Vehículo creado');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function updateVehiculoHandler(req, res) {
    try {
        const { id } = req.params;
        const vehiculoData = req.body;
        await updateVehiculoModel(id, vehiculoData);
        res.send('Vehículo actualizado');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteVehiculoHandler(req, res) {
    try {
        const { id } = req.params;
        await deleteVehiculoModel(id);
        res.send('Vehículo eliminado');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export { getAllVehiculos, getVehiculoById, createVehiculo, updateVehiculoHandler as updateVehiculo, deleteVehiculoHandler as deleteVehiculo };