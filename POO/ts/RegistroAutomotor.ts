import { Auto } from "./Auto.js";
import { Camion } from "./Camion.js";
import { Moto } from "./Moto.js";

export class RegistroAutomotor {
    // "COMPOSICION" registro automotor "TIENE UN"
    private autos: Auto[];
    private motos: Moto[];
    private camiones: Camion[];

    // LISTA DE VEICULOS POR DEFECTO VACIAS
    public constructor() {
        this.autos =[];
        this.motos = [];
        this.camiones = [];
    }

    // FUNCION PRIVADA PARA FACTORIZAR EL FILTRO AL CREAR
    private filtrarIndice(lista: (Auto | Moto | Camion)[], codigoPatente: string): number {
        const buscarIndice = lista.findIndex((data) => data.getPatente() === codigoPatente.toUpperCase()) //VERIFICAR SI YA EXISTE LA PATENTE
        return buscarIndice;
    }

    // FUNCION PRIVADA PARA FACTORIZAR EL FILTRO AL MODIFICAR
    private filtrarYModificar(lista: (Auto | Moto | Camion)[], codigoPatente: string, marca: string, modelo: string, anio: number, patente: string, motor: string): void {
        if (lista.length > 0) {
            const buscarIndice = lista.findIndex(vehiculo => vehiculo.getPatente() === codigoPatente.toUpperCase());
            // SI EXISTE
            if (buscarIndice !== -1) {
                lista[buscarIndice].setMarca(marca);
                lista[buscarIndice].setModelo(modelo);
                lista[buscarIndice].setAnio(anio);
                lista[buscarIndice].setPatente(patente);
                lista[buscarIndice].setMotor(motor);
            }
        }
    }

    // AGREGAR VEHÍCULO
    public registrarVehiculo(tipo: string, marca: string, modelo: string, anio: number, patente: string, motor: string):void {
        // VERIFICAR EL TIPO DE VEHICULO
        switch (tipo.toLowerCase().trim()) {  // CONVERTIR A MINUSCULA ANTES DE VALIDAR
            case "auto": {
                const filtrarIndice:number=this.filtrarIndice(this.autos, patente);
                const vehiculoNoExiste:boolean = filtrarIndice === -1;
                if(vehiculoNoExiste){
                   const auto: Auto = new Auto(marca, modelo, anio, patente, motor)
                   this.autos.push(auto);
                }else{
                    console.log(`Ya existe un vehículo con la patente: ${this.autos[filtrarIndice].getPatente()}`);
                }
                break;
            };
            case "moto": {
                const filtrarIndice:number=this.filtrarIndice(this.motos, patente);
                const vehiculoNoExiste:boolean = filtrarIndice === -1; //SI NO EXISTE SERA TRUE
                if(vehiculoNoExiste){
                   const moto: Moto = new Moto(marca, modelo, anio, patente, motor);
                   this.motos.push(moto);
                }else{
                    console.log(`Ya existe un vehículo con la patente: ${this.motos[filtrarIndice].getPatente()}`);
                }
                break;
            }; 
            case "camion": {
                const filtrarIndice:number=this.filtrarIndice(this.motos, patente);
                const vehiculoNoExiste:boolean = filtrarIndice  === -1;
                if(vehiculoNoExiste){
                   const camion: Camion = new Camion(marca, modelo, anio, patente, motor)
                   this.camiones.push(camion);
                }else{
                    console.log(`Ya existe un vehículo con la patente: ${this.camiones[filtrarIndice].getPatente()}`);
                }
                break;
            };
            default: {
                console.log("Tipo de vehículo no reconocido");
            }
        }
    }

    public modificarVehiculo(tipo: string, codigoPatente: string, marca: string, modelo: string, anio: number, patente: string, motor: string):void{
        switch (tipo.toLowerCase().trim()) {  // CONVERTIR A MINUSCULA ANTES DE VALIDAR
            case "auto": {
                this.filtrarYModificar(this.autos, codigoPatente, marca, modelo, anio, patente, motor);
                break;
            };
            case "moto": {
                this.filtrarYModificar(this.motos, codigoPatente, marca, modelo, anio, patente, motor);
                break;
            };
            case "camion": {
                this.filtrarYModificar(this.camiones, codigoPatente, marca, modelo, anio, patente, motor);
                break;
            };
            default: {
                console.log("Tipo de vehículo no reconocido");
            }
        }
    }

    public eliminarVehiculo(tipo:string, codigoPatente:string):void{
        switch (tipo.toLowerCase().trim()) {// CONVERTIR A MINUSCULA ANTES DE VALIDAR
            case "auto": {
                const buscarIndice:number= this.filtrarIndice(this.autos, codigoPatente);
                // SI EXISTE PROCEDEMOS A ELIMINACION
                if(buscarIndice !== -1){
                    // DISCRIMINO USANDO FILTER
                    const filtroEliminacion:Auto[] = this.autos.filter(vehiculo => vehiculo.getPatente() !== this.autos[buscarIndice].getPatente());
                    this.autos =filtroEliminacion;
                }else{
                    console.log("No se pudo eliminar, lista autos vacia");
                }
                break;
            };
            case "moto": {
                const buscarIndice:number= this.filtrarIndice(this.motos, codigoPatente);
                if(buscarIndice !== -1){
                    const filtroEliminacion:Moto[] = this.motos.filter(vehiculo => vehiculo.getPatente() !== this.motos[buscarIndice].getPatente().toUpperCase());
                    this.motos =filtroEliminacion; //GUARDO EL NUEVO ARRAY DISCRIMINANDO EL VEHICULO A BORRAR
                }else{
                    console.log("No se pudo eliminar, lista motos vacia");
                }
                break;
            };
            case "camion": {
                const buscarIndice:number= this.filtrarIndice(this.camiones, codigoPatente);
                if(buscarIndice !== -1){
                    const filtroEliminacion:Camion[] = this.camiones.filter(vehiculo => vehiculo.getPatente() !== this.camiones[buscarIndice].getPatente().toUpperCase());
                    this.camiones =filtroEliminacion; 
                }else{
                    console.log("No se pudo eliminar, lista camiones vacia");
                }
                break;
            };
            default: {
                console.log("No se pudo eliminar.Tipo de vehículo no reconocido");
            }
        }
    }

    public verListaPorTipoVehiculo(tipo:string){
        switch(tipo.toLowerCase().trim()){
            case "auto":{
               if(this.autos.length > 0){
                console.log("-->Lista de Autos<---");
                console.log(this.autos);
               }else{
                    console.log("No hay lista de Autos que mostrar");
               }
               break;
            };
            case "moto":{
                if(this.motos.length > 0){
                    console.log("-->Lista de Motos<---");
                    console.log(this.motos);
                }else{
                    console.log("No hay lista de Motos que mostrar");
                }
                break;
            }
            case "camion":{
                if(this.camiones.length > 0){
                    console.log("-->Lista de Camiones<---");
                    console.log(this.camiones);
                }else{
                    console.log("No hay lista de Camiones que mostrar");
                }
                break;
            }default:{
                console.log("Tipo de vehículo incorrecto");
            }
        }
    }

}