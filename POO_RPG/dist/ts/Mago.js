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
exports.Mago = void 0;
var picocolors = require("picocolors");
var Personaje_js_1 = require("./Personaje.js");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, puntosVida, nivelAtaque) {
        var _this = _super.call(this, nombre, puntosVida, nivelAtaque) || this;
        _this.luzArcana = picocolors.cyanBright("Chispa Mágica");
        return _this;
    }
    // MOSTRAR NOMBRE
    Mago.prototype.getNombreMago = function () {
        return this.getNombre();
    };
    //MODIFICAR NOMBRE
    Mago.prototype.setNombreMago = function () {
        this.setNombre(this.nombre);
    };
    // MUESTRA EL NIVEL DE ATAQUE
    Mago.prototype.mostrarNivelAtaque = function () {
        return this.getNivelAtaque();
    };
    // MODIFICA EL NIVEL ATAQUE
    Mago.prototype.nuevoNivelAtaque = function () {
        this.setNivelAtaque(this.nivelAtaque);
    };
    // METODO DE DEFENSA DE PERSONAJE
    Mago.prototype.jugadorSeDefiende = function () {
        this.defenderse();
    };
    Mago.prototype.utilizarLuzArcana = function () {
        this.atacar(this.luzArcana);
    };
    return Mago;
}(Personaje_js_1.Personaje));
exports.Mago = Mago;
