function listarTiposVehiculosPorCliente(idCliente) {
    const alquileres = getAlquileres().filter(alquiler => alquiler.idCliente === idCliente);
    const idsVehiculosAlquilados = alquileres.map(alquiler => alquiler.idVehiculo);
    const vehiculos = getVehiculos().filter(vehiculo => idsVehiculosAlquilados.includes(vehiculo.id));

    const tipos = vehiculos.map(vehiculo => vehiculo.tipo)
        .filter((tipo, index, self) => self.indexOf(tipo) === index);
    return tipos;
}