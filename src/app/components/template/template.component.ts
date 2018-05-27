import { Component } from '@angular/core';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border:1px solid red;
    }
    `
  ]
})
export class TemplateComponent  {


  usuario:Object = {
    nombre: null,
    apellido: null,
    correo:null,
    pais:"",
    sexo:"Hombre",
    acepta:false
  }
  paises = [
    {
      codigo: "CRI",
      nombre:"Costa Rica"
    },
    {
      codigo: "COL",
      nombre:"Colombia"
    },
    {
      codigo: "ARG",
      nombre:"Argentina"
    },

  ]


  sexos:string[]=["Hombre","Mujer"]
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
