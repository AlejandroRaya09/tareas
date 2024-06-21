import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

listaTareas: Tarea[] = []
nombreTarea:string = ''

constructor(){}


agregarTarea(){
  //Crear Objeto TAREA
  const tareaNueva: Tarea = {
    nombre: this.nombreTarea,
    estado: false
  }

  //Agregar Objeto al Array
  this.listaTareas.push(tareaNueva);

  //Resetear Form
  this.nombreTarea = '';
}


eliminarTarea(indice:number){
this.listaTareas.splice(indice,1)
}

actualizarTarea(tarea:Tarea, indice:number){
this.listaTareas[indice].estado = !tarea.estado
}

}
