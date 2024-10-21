import * as picocolors from "picocolors";
import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    private modoSniper: string;
    public constructor(nombre: string, puntosVida: number, nivelAtaque: number) {
        super(nombre, puntosVida, nivelAtaque);
        this.modoSniper = picocolors.yellow("Ataque de modo sniper, Flecha precisa y directa al oponente");
    }

    // MOSTRAR EL NOMBRE
    public getNombreArquero(): string {
        return this.getNombre();
    }
    //MODIFICAAR NOMBRE
    public setNombreArquero(): void {
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
    public utilizarModoSniper(): void {
        this.atacar(this.modoSniper);
    }
}