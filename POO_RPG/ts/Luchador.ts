import { Personaje } from "./Personaje.js";
import * as picocolors from "picocolors";
export class Luchador extends Personaje {
    private punioAcero: string;

    public constructor(nombre: string, puntosVida: number, nivelAtaque: number) {
        super(nombre, puntosVida, nivelAtaque);
        this.punioAcero = picocolors.red("Ataque puño de acero!");
    }

    // VER NOMBRE
    public getNombreLuchador(): string {
        return this.getNombre();
    }

    // MODIFICA EL NOMBRE
    public setNombreLuchador(): void {
        this.setNombre(this.nombre)
    }

    // MUESTRA EL NIVEL DE ATAQUE
    public mostrarNivelAtaque(): number {
        return this.getNivelAtaque();
    }
    // MODIFICA EL NIVEL ATAQUE
    public nuevoNivelAtaque(): void {
        this.setNivelAtaque(this.nivelAtaque)
    }

    // METODO DE DEFENSA DE PERSONAJE
    public jugadorSeDefiende() {
        this.defenderse();
    }

    // UTILIZAR PODER
    public utilizarPuñoAcero(): void {
        this.atacar(this.punioAcero)
    }
}