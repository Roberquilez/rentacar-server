function listarTiposAlquileresPorCliente(idCliente) {
    const alquileres = getAlquileres().filter(alquiler => alquiler.idCliente === idCliente);
    const vehiculos = getVehiculos();

    const tipos = alquileres.map(alquiler => {
        const vehiculo = vehiculos.find(vehiculo => vehiculo.id === alquiler.idVehiculo);
        return vehiculo ? vehiculo.tipo : null;
    }).filter((tipo, index, self) => tipo && self.indexOf(tipo) === index);

    return tipos;
}