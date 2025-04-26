import { OperacionInstruccion } from "../Enums/operacion-instruccion";
import { VariableInstruccion } from "../Enums/variable-instruccion";

export class Instruccion {
  operacion: OperacionInstruccion | undefined;
  operando1: number | VariableInstruccion | undefined;
  operando2: number | VariableInstruccion | undefined;
  operando3: number | VariableInstruccion | undefined;
  textoInstruccion: string;

  constructor(textoInstruccion: string) {
    this.textoInstruccion = textoInstruccion;
    this.descomponerInstruccion();
  }

  descomponerInstruccion(): void {
    let instruccionArray = this.textoInstruccion.split(" ");
    this.operacion = this.obtenerOperacion(instruccionArray[0]);
    this.operando1 = this.obtenerOperando(instruccionArray[1]);
    this.operando2 = this.obtenerOperando(instruccionArray[2]);
    this.operando3 = this.obtenerOperando(instruccionArray[3]);
  }

  obtenerOperacion(operacion: string): OperacionInstruccion | undefined {
    switch (operacion.toUpperCase()) {
      case "LOAD":
        return OperacionInstruccion.LOAD;
      case "MUL":
        return OperacionInstruccion.MUL;
      case "ADD":
        return OperacionInstruccion.ADD;
      case "SUB":
        return OperacionInstruccion.SUB;
      case "DIV":
        return OperacionInstruccion.DIV;
      case "MOVE":
        return OperacionInstruccion.MOVE;
      case "INC":
        return OperacionInstruccion.INC;
      case "NOT":
        return OperacionInstruccion.NOT;
      case "AND":
        return OperacionInstruccion.AND;
      case "OR":
        return OperacionInstruccion.OR;
      case "HALT":
        return OperacionInstruccion.HALT;
      case "OUT":
        return OperacionInstruccion.OUT;
      case "CMP":
        return OperacionInstruccion.CMP;
      case "JMP":
        return OperacionInstruccion.JMP;
      case "JNE":
        return OperacionInstruccion.JNE;
      case "IN":
        return OperacionInstruccion.IN;
      default:
        return undefined;
    }
  }

  obtenerOperando(operando: string): number | VariableInstruccion | undefined {
    if (operando == undefined) {
      return undefined;
    }
    switch (operando.toUpperCase()) {
      case "A":
        return VariableInstruccion.A;
      case "B":
        return VariableInstruccion.B;
      case "C":
        return VariableInstruccion.C;
      case "D":
        return VariableInstruccion.D;
      case "E":
        return VariableInstruccion.E;
      case "F":
        return VariableInstruccion.F;
      case "G":
        return VariableInstruccion.G;
      case "H":
        return VariableInstruccion.H;
      default:
        return Number(operando);
    }
  }

  toString(): string {
    return this.textoInstruccion;
  }
}
