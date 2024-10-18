"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var picocolors = require("picocolors");
var Luchador_js_1 = require("./ts/Luchador.js");
var Mago_js_1 = require("./ts/Mago.js");
var mago = new Mago_js_1.Mago("Mago Kael", 100, 90);
var luchador = new Luchador_js_1.Luchador("Luchador Lian", 100, 3);
console.log(mago.getNombreMago(), picocolors.bgMagenta("***VS***"), luchador.getNombreLuchador() + "\n");
luchador.utilizarPuñoAcero();
mago.recibirAtaque(luchador.mostrarNivelAtaque());
mago.utilizarLuzArcana();
luchador.recibirAtaque(mago.mostrarNivelAtaque());
luchador.utilizarPuñoAcero();
mago.jugadorSeDefiende();
mago.recibirAtaque(luchador.mostrarNivelAtaque());
console.log("Mago se enfadó\n");
mago.utilizarLuzArcana();
luchador.recibirAtaque(mago.mostrarNivelAtaque());
