import * as picocolors from "picocolors";
import { Luchador } from "./ts/Luchador.js";
import { Mago } from "./ts/Mago.js";


const mago = new Mago("Mago Kael", 100, 90);
const luchador = new Luchador("Luchador Lian", 100, 3);

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
