import { Vehiculo } from "./Vehiculo.js";

export class Camion extends Vehiculo{
    constructor(marca: string, modelo: string, anio: number, patente: string, motor: string) {
        super(marca, modelo, anio, patente, motor)
    }
}

