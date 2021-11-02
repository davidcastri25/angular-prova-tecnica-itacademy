import { Injectable } from '@angular/core';

import { Field, Rover} from '../interfaces/interfaces';
import { field, rover} from '../data/data';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  /* Properties */
  formValues: any; //Aquí pongo any porque es el type que me aparece en el elemento que paso como parámetro
  currentOrientation!: 'N' | 'S' | 'E' | 'W'; //Para controlar en todo momento la orientación del rover  

  constructor() {}

  /* Método que guardará los datos del formulario en una propiedad del servicio */
  passData(formValues: any) {
    this.formValues = formValues;
    this.currentOrientation = formValues.orientation;
  }

  /* SETTER: Método que asigna los datos del formulario a los objetos JavaScript */
  setData() { 
    //formValues es un objeto
    
    //Asignamos valores a field
    field.height = this.formValues.height;
    field.width = this.formValues.width;

    //Asignamos valores a rover
    rover.initialPosition = {
      x: this.formValues.x,
      y: this.formValues.y
    }
    rover.initialOrientation = this.formValues.orientation;
    rover.commands = this.formValues.commands;

    console.log(field);
    console.log(rover)
  }

  /* SETTER: Método que comprobará que las órdenes introducidas sean válidas */
  validateAndSetCommands() {
    let commandsArr: string[] = this.formValues.commands;
    let validCommands = true;
    
    //Miramos el array de órdenes
    commandsArr.forEach(command => {
      switch (command) {
        case 'A': case 'L': case 'R': break;
        default: 
          validCommands = false;
      }
    });

    //Devolvemos boolean
    return validCommands;
  }
}
