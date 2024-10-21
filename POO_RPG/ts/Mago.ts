import * as picocolors from "picocolors";
import { Personaje } from "./Personaje.js";

export class Mago extends Personaje {
    private luzArcana: string;
    public constructor(nombre: string, puntosVida: number, nivelAtaque: number) {
        super(nombre, puntosVida, nivelAtaque);
        this.luzArcana = picocolors.cyanBright("Chispa Mágica");
    }

    // MOSTRAR NOMBRE
    public getNombreMago(): string {
        return this.getNombre();
    }
    //MODIFICAR NOMBRE
    public setNombreMago(): void {
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
    public jugadorSeDefiende(){
        this.defenderse();
    }

    public utilizarLuzArcana(): void {
        this.atacar(this.luzArcana)
    }

}