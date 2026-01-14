import { ObjectId } from "mongodb";

export interface Coder {
    _id?: ObjectId;
    nombre: string;
    correo: string;
    rutas: string[];
    jornada: "am" | "pm";
    altura?:number
}