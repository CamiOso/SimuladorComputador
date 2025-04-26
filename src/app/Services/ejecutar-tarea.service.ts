import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjecutarTareaService {

  constructor() { }

  ejecutarTarea(tarea: CallableFunction): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tarea();
        resolve();
      }, 1000);
    });
  }
}
