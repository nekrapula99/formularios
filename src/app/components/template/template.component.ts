import { Component } from '@angular/core';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent  {


  usuario:Object = {
    nombre: "Nekrapula",
    apellido: "Ob",
    correo:""
  }
  constructor() { }


  guardar(forma:NgForm){
    console.log("Form Guardado!!");
    console.log("forma: ",forma);
    console.log("Valor: ",forma.value);

    console.log("Usuario: ",this.usuario);

    console.log("status: ",forma.status);
    console.log("touched: ",forma.touched);
  }

}
