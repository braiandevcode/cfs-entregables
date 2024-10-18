import { RegistroAutomotor } from "./ts/RegistroAutomotor.js";


// PRUEBAS
const registro= new RegistroAutomotor(); //SE INSTANCIA CLASE DE REGISTRO

registro.registrarVehiculo("auto", "Fiat", "Palio", 2005, "abc456", "Nafta"); //SE AÑADE
registro.verListaPorTipoVehiculo("auto"); // SE COMPRUEBA LA LISTA

console.log("----->MODIFICANDO<-----");
registro.modificarVehiculo("auto", "Abc456", "Fiat", "Palio", 2012, "aJc123", "Nafta"); //SE MODIFICA
registro.verListaPorTipoVehiculo("auto"); //SE COMPRUEBA MODIFICACIÓN


console.log("ELIMINANDO");
registro.eliminarVehiculo("auto","AjC123"); //SE COMPRUEBA MODIFICACIÓN
registro.verListaPorTipoVehiculo("auto"); //SE COMPRUEBA ELIMINACION
