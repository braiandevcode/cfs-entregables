import { Motor } from "./Motor.js";

export class Moto {
    private marca: string;
    private modelo: string;
    private anio: number;
    private patente: string;
    private motor:Motor;

    constructor(marca: string, modelo: string, anio: number, patente: string, motor:string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente.toUpperCase().trim();
        this.motor = new Motor(motor)
    }

    //--------------->METODOS GETTERS Y SETTERS<---------------
    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    //MODELO
    getModelo(): string {
        return this.modelo;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    // ANIO
    getAnio(): number {
        return this.anio;
    }

    setAnio(anio: number): void {
        this.anio = anio;
    }

    // PATENTE
    getPatente(): string {
        return this.patente;
    }

    setPatente(patente: string): void {
        this.patente = patente.toUpperCase().trim();
    }

    // MOTOR
    getMotor(): string {
        return this.motor.getNameMotor();
    }

    setMotor(motor: string): void {
        this.motor.setNameMotor(motor);
    }
}