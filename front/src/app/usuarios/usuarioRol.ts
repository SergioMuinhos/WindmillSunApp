import { Rol } from "./rol";

export class UsuarioRol {
    id: number;
    username: string;
    nombre: string;
    apellidos: string;
    password: string;
    enabled:boolean=true;
    email: string;
    roles:Rol[] = new Array();

    constructor(){
        this.roles= new Array(2);
    }

}