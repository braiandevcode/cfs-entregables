"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var picocolors = require("picocolors");
var Personaje = /** @class */ (function () {
    function Personaje(nombre, puntosVida, nivelAtaque) {
        this.nombre = nombre;
        this.nivel = 1;
        this.nivelAtaque = nivelAtaque;
        this.puntosVida = puntosVida;
        this.seDefiende = false;
        this.tieneVida = this.puntosVida > 0;
    }
    // METODO PARA VER NOMBRE DE PERSONAJE
    Personaje.prototype.getNombre = function () {
        return picocolors.bold(picocolors.yellow(this.nombre));
    };
    // METODO PARA CAMBIAR NOMBRE DE PERSONAJE
    Personaje.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    // METODO PARA VER NIVEL DE ATAQUE DE PERSONAJE
    Personaje.prototype.getNivelAtaque = function () {
        return this.nivelAtaque;
    };
    // METODO PARA CAMBIAR NIVEL DE ATAQUE DE PERSONAJE
    Personaje.prototype.setNivelAtaque = function (nuevoNivelAtaque) {
        this.nivelAtaque = nuevoNivelAtaque;
    };
    // METODO PARA VER NIVEL DE PERSONAJE
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    // METODO PARA CAMBIAR NIVEL DE PERSONAJE
    Personaje.prototype.setNivel = function (nuevoNivel) {
        this.nivel = nuevoNivel;
    };
    // METODO PARA VER PUNTOS DE VIDA DEL PERSONAJE
    Personaje.prototype.getPuntosVida = function () {
        if (this.tieneVida) {
            return this.puntosVida;
        }
        else {
            return 0;
        }
    };
    // METODO PARA MODIFICAR PUNTOS DE VIDA DEL PERSONAJE
    Personaje.prototype.setPuntosVida = function (nuevopuntosVida) {
        this.puntosVida = nuevopuntosVida;
        this.tieneVida = this.puntosVida > 0;
    };
    // METODO DE ATAQUE DEL PERSONAJE
    Personaje.prototype.atacar = function (poder) {
        console.log(picocolors.bold("".concat(picocolors.magenta(this.nombre), " ataca utilizando el poder: ").concat(poder, "\n")));
    };
    // METODO DEFENSA DEL PERSONAJE
    Personaje.prototype.defenderse = function () {
        console.log(picocolors.green("Personaje ".concat(picocolors.bold(picocolors.magenta(this.nombre)), " se est\u00E1 defendiendo!")));
    };
    // METODO QUE SE EJECUTA AL RECIBIR UN ATAQUE EL PERSONAJE
    Personaje.prototype.recibirAtaque = function (danio) {
        // SI TIENE VIDA ACTUALIZAR EL NUEVO VALOR SINO CERO
        if (this.tieneVida) {
            var nuevoValor = this.puntosVida - danio;
            this.setPuntosVida(nuevoValor);
        }
        else {
            this.setPuntosVida(0);
        }
        // SI TIENE VIDA SE PODRÁ DEFENDER
        if (this.tieneVida) {
            if (!this.seDefiende) {
                console.log("\u00A1".concat(this.getNombre(), " ha recibido el ataque con da\u00F1o ").concat(danio, "! Puntos de vida restantes: ").concat(this.puntosVida));
            }
            else {
                console.log("".concat(this.getNombre(), " se defendi\u00F3 con \u00E9xito y no perdi\u00F3 puntos de vida."));
            }
        }
        else {
            console.log("".concat(this.getNombre(), " ha sido vencido.Puntos de vida: 0"));
        }
    };
    return Personaje;
}());
exports.Personaje = Personaje;
