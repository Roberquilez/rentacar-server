import { getVehiculos, getClientes, getAlquileres } from '../models/data.js';

async function getVehiculoConClientes(idVehiculo) {
    const vehiculos = await getVehiculos();
    const alquileres = await getAlquileres();
    const clientes = await getClientes();

    const vehiculo = vehiculos.find(v => v.id === idVehiculo);
    if (!vehiculo) {
        return null;
    }

    const alquileresVehiculo = alquileres.filter(a => a.id_vehiculo === idVehiculo);
    const clientesAlquiler = alquileresVehiculo.map(alquiler => {
        return clientes.find(cliente => cliente.id === alquiler.id_cliente);
    });

    const clientesFiltrados = clientesAlquiler.filter(cliente => cliente !== undefined);

    return {
        vehiculo,
        clientes: clientesFiltrados
    };
}

export { getVehiculoConClientes };