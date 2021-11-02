import { Injectable } from '@angular/core';

import { Field, Rover} from '../interfaces/interfaces';
import { field, rover} from '../data/data';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  /* Properties */
  formValues: any; //Aquí pongo any porque es el type que me aparece en el elemento que paso como parámetro

  constructor() { }

  /* Método que guardará los datos del formulario en una propiedad del servicio */
  passData(formValues: any) {
    this.formValues = formValues;
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
  }
}
