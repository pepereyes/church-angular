export class tipoSexo {
    tipo:boolean;
    descripcion:string;
    constructor(tipo:boolean) {
        this.tipo = tipo;
        if(tipo) {
            this.descripcion = "Hombre"
        } else {
            this.descripcion = "Mujer"
        }
    }
}