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
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }

    // METODO PRIVADO FACTORIZAR EL FILTRO AL CREAR
    private filtrarIndice(lista: (Auto | Moto | Camion)[], codigoPatente: string): number {
        const buscarIndice = lista.findIndex((data) => data.getPatente() === codigoPatente.toUpperCase()) //VERIFICAR SI YA EXISTE LA PATENTE
        return buscarIndice;
    }

    // METODO PARA FACTORIZAR EL FILTRO AL MODIFICAR
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

                console.log("Modificado con exito!");
            }
        }
    }

    // METODO PARA VALIDAR TIPO DE VEHICULO
    private validarTipo(tipo: string, fn: (lista: (Auto | Moto | Camion)[]) => void): void {
        switch (tipo.toLowerCase().trim()) {
            case "auto":
                fn(this.autos);
                break;
            case "moto":
                fn(this.motos);
                break;
            case "camion":
                fn(this.camiones);
                break;
            default:
                console.log("Tipo de vehículo no reconocido");
        }
    }

    // FUNCION RESPONSABLE DE CREAR VEHICULO
    private crearVehiculo(tipo: string, marca: string, modelo: string, anio: number, patente: string, motor: string): Auto | Moto | Camion | null {
        switch (tipo.toLowerCase().trim()) {
            case "auto":
                return new Auto(marca, modelo, anio, patente, motor); //INSTANCIAR AUTO
            case "moto":
                return new Moto(marca, modelo, anio, patente, motor); //INSTANCIAR MOTO
            case "camion":
                return new Camion(marca, modelo, anio, patente, motor); //INSTANCIAR CAMION
            default:
                return null;
        }
    }

    // AGREGAR VEHÍCULO
    public registrarVehiculo(tipo: string, marca: string, modelo: string, anio: number, patente: string, motor: string): void {
        // VERIFICAR EL TIPO DE VEHICULO
        this.validarTipo(tipo, (lista) => {
            const VEHICULO = this.crearVehiculo(tipo, marca, modelo, anio, patente, motor);
            if (VEHICULO) {
                const filtrarIndice: number = this.filtrarIndice(lista, patente);
                if (filtrarIndice === -1) {
                    lista.push(VEHICULO);
                } else {
                    console.log(`Ya existe un vehículo con la patente: ${lista[filtrarIndice].getPatente()}`);
                }
            }
        });
    }

    // FUNCCION PARA MODIFICAR VEHICCULO
    public modificarVehiculo(tipo: string, codigoPatente: string, marca: string, modelo: string, anio: number, patente: string, motor: string): void {
        this.validarTipo(tipo, (lista) => {
            this.filtrarYModificar(lista, codigoPatente, marca, modelo, anio, patente, motor);
        });
    }

    // METODO PARA ELIMINAR
    public eliminarVehiculo(tipo: string, codigoPatente: string): void {
        // VALIDO TIPO
        this.validarTipo(tipo, (lista)=>{
            const buscarIndice: number = this.filtrarIndice(lista, codigoPatente); //AQUI PASO LA LISTA SEGUN TIPO.
            // SI EXISTE PROCEDEMOS A ELIMINACION
            if (buscarIndice !== -1) {
                let tipoCapitalizado = `${tipo.charAt(0).toUpperCase()}${tipo.slice(1).toLocaleLowerCase()}`;
                lista.splice(buscarIndice, 1) //ELIMINO EL ELEMENTO DIRECTAMENTE DE LA LISTA
                console.log(`Vehículo con patente ${codigoPatente} eliminado de la lista de ${tipoCapitalizado}.`);
            } else {
                console.log("No se pudo eliminar, lista autos vacia");
            }
        });
    }

    // METODO PARA VER LISTA SEGÚN TIPO DE VEHICULO
    public verListaPorTipoVehiculo(tipo: string):void {
        this.validarTipo(tipo, (lista)=>{
            // CAMBIO A FORMATO CAPITALIZADO EJMEPLO ENTRADA---> "tIPo" = SALIDA---> "Tipo"
            let tipoCapitalizado = `${tipo.charAt(0).toUpperCase()}${tipo.slice(1).toLocaleLowerCase()}`;
            if (lista.length > 0) {
                console.log(`-->Lista de ${tipoCapitalizado}<---`);
                console.log(lista);
            } else {
                console.log(`No hay lista de ${tipoCapitalizado} que mostrar`);
            }
        });
    }

}