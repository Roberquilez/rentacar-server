'use strict'

// NOTA: Estas funciones deben obtener los datos de la "BBDD" (data.js)
//  después debe filtrarlos para cumplir lo que se solicita

import { getVehiculos, addVehiculos, getClientes, addClientes, getAlquileres, addAlquileres } from './data.js'

function getVehiculosById(idVehiculos) {
    // TODO
}

function getClientesById(idProfesor) {
    // TODO
}

function getAlquileresById(idAlquieres) {
    // TODO
}

// Asignaturas que imparte un profesor
function getAlquileressByClienteId(idCliente) {
    // TODO
}


function getVehiculoByClienteId(idCliente) {
    // TODO
}

export default {
    vehiculos: {
        get: {
            all: getVehiculos,
            byId: getVehiculosById
        },
        add: addVehiculos
    },
    clientes: {
        get: {
            all: getClientes,
            byId: getClientesById
        },
        add: addClientes
    },
    alquileres: {
        get: {
            all: getAlquileres,
            byId: getAlquileresById,
            byClientesid: getAlquileresByClientesId,
        },
        add: addAlquileres
    }
}