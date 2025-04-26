import { Instruccion } from "./instruccion";

export class Memoria {
  celdas: Array<Instruccion> = new Array<Instruccion>();

  agregarInstruccion(instruccion: string) {
    this.celdas.push(new Instruccion(instruccion));
  }

  obtenerInstruccion(direccion: number): Instruccion | undefined {
    return this.celdas[direccion];
  }
}
