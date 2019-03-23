import { Desearizable } from "./Desealizable";
import { tipoSexo } from "./sexo";

export class Miembro implements Desearizable{
    id:number;
    nombre:string;
    telefono:string;
    direccion:string;
    fechaNacimiento:Date;
    comentarios:string;
    sexo:boolean;
    sexos:Array<tipoSexo>=[new tipoSexo(true), new tipoSexo(false)];
    activo:boolean;
    constructor(id, nombre, telefono, direccion,
        fechaNacimiento, comentarios, sexo, activo
    ) {
        this.id=id;
        this.nombre=nombre;
        this.telefono=telefono;
        this.direccion=direccion;
        this.fechaNacimiento=fechaNacimiento;
        this.comentarios=comentarios;
        this.sexo=sexo;
        this.activo=activo;
    }
    desearilaze(input:any) {
        Object.assign(this, input);
        return this;
    }
}
