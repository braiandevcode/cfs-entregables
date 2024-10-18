import * as picocolors from "picocolors";

export class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected nivelAtaque:number;
    protected puntosVida: number;
    protected seDefiende: boolean;
    protected tieneVida:boolean;

    public constructor(nombre: string, puntosVida: number, nivelAtaque:number) {
        this.nombre = nombre;
        this.nivel = 1;
        this.nivelAtaque=nivelAtaque;
        this.puntosVida = puntosVida;
        this.seDefiende = false;
        this.tieneVida = this.puntosVida > 0;
    }

    // METODO PARA VER NOMBRE DE PERSONAJE
    protected getNombre(): string {
        return picocolors.bold(picocolors.yellow(this.nombre));
    }

    // METODO PARA CAMBIAR NOMBRE DE PERSONAJE
    protected setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }


    // METODO PARA VER NIVEL DE ATAQUE DE PERSONAJE
    protected getNivelAtaque(): number {
       return this.nivelAtaque;
        
    }

    // METODO PARA CAMBIAR NIVEL DE ATAQUE DE PERSONAJE
    protected setNivelAtaque(nuevoNivelAtaque: number): void {
        this.nivelAtaque= nuevoNivelAtaque;
    }

    // METODO PARA VER NIVEL DE PERSONAJE
    public getNivel(): number {
        return this.nivel;
    }

    // METODO PARA CAMBIAR NIVEL DE PERSONAJE
    public setNivel(nuevoNivel: number): void {
        this.nivel = nuevoNivel;
    }

    // METODO PARA VER PUNTOS DE VIDA DEL PERSONAJE
    public getPuntosVida(): number{
        if(this.tieneVida){
            return this.puntosVida;
        }else{
            return 0;
        }
    }

     // METODO PARA MODIFICAR PUNTOS DE VIDA DEL PERSONAJE
    public setPuntosVida(nuevopuntosVida: number): void {
        this.puntosVida = nuevopuntosVida;
        this.tieneVida = this.puntosVida > 0;
    }

    // METODO DE ATAQUE DEL PERSONAJE
    protected atacar(poder: string): void {
        console.log(picocolors.bold(`${picocolors.magenta(this.nombre)} ataca utilizando el poder: ${poder}\n`));
    }

    // METODO DEFENSA DEL PERSONAJE
    protected defenderse(): void {
        console.log(picocolors.green(`Personaje ${picocolors.bold(picocolors.magenta(this.nombre))} se está defendiendo!`));
    }

    // METODO QUE SE EJECUTA AL RECIBIR UN ATAQUE EL PERSONAJE
    public recibirAtaque(danio: number): void {
        // SI TIENE VIDA ACTUALIZAR EL NUEVO VALOR SINO CERO
        if(this.tieneVida){
            let nuevoValor = this.puntosVida - danio;
            this.setPuntosVida(nuevoValor);
        }else{
            this.setPuntosVida(0);
        }

        // SI TIENE VIDA SE PODRÁ DEFENDER
        if(this.tieneVida){
            if (!this.seDefiende) {
                console.log(`¡${this.getNombre()} ha recibido el ataque con daño ${danio}! Puntos de vida restantes: ${this.puntosVida}`);
            } else {
                console.log(`${this.getNombre()} se defendió con éxito y no perdió puntos de vida.`);
            }
        }else{
            console.log(`${this.getNombre()} ha sido vencido.Puntos de vida: 0`);
        }
    }
}
