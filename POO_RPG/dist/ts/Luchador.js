"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
var Personaje_js_1 = require("./Personaje.js");
var picocolors = require("picocolors");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre, puntosVida, nivelAtaque) {
        var _this = _super.call(this, nombre, puntosVida, nivelAtaque) || this;
        _this.punioAcero = picocolors.red("Ataque puño de acero!");
        return _this;
    }
    // VER NOMBRE
    Luchador.prototype.getNombreLuchador = function () {
        return this.getNombre();
    };
    // MODIFICA EL NOMBRE
    Luchador.prototype.setNombreLuchador = function () {
        this.setNombre(this.nombre);
    };
    // MUESTRA EL NIVEL DE ATAQUE
    Luchador.prototype.mostrarNivelAtaque = function () {
        return this.getNivelAtaque();
    };
    // MODIFICA EL NIVEL ATAQUE
    Luchador.prototype.nuevoNivelAtaque = function () {
        this.setNivelAtaque(this.nivelAtaque);
    };
    // METODO DE DEFENSA DE PERSONAJE
    Luchador.prototype.jugadorSeDefiende = function () {
        this.defenderse();
    };
    // UTILIZAR PODER
    Luchador.prototype.utilizarPuñoAcero = function () {
        this.atacar(this.punioAcero);
    };
    return Luchador;
}(Personaje_js_1.Personaje));
exports.Luchador = Luchador;
