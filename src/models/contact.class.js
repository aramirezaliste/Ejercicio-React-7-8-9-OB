import { LEVELS } from "./levels";

//Clase creadora de contactos
export class Contacto {
    nombre = "";
    descripcion = "";
    estado = true;
    importancia = LEVELS.NORMAL;

    constructor(nombre, descripcion,estado,importancia){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado = estado;
        this.importancia = importancia;
    }
}