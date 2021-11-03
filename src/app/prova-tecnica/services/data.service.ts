import { Injectable } from '@angular/core';

import { Field, Rover, RoverPosition} from '../interfaces/interfaces';
import { field, rover} from '../data/data';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  /* Properties */
  formValues: any; //Aquí pongo any porque es el type que me aparece en el elemento que paso como parámetro
  currentOrientation!: 'N' | 'S' | 'E' | 'W'; //Para controlar en todo momento la orientación del rover
  currentPosition!: RoverPosition; 
  insideField: boolean = true; //Propiedad que controlará que no nos salgamos del campo (true: OK, false: nos hemos salido) 

  constructor() {}

  /* Método que guardará los datos del formulario en propiedad del servicio e inicializará propiedades*/
  passData(formValues: any) {
    this.formValues = formValues;
    this.currentOrientation = formValues.orientation;
    this.currentPosition = {
      x: this.formValues.x,
      y: this.formValues.y
    };
    this.insideField = true;
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

  /* Método que comprueba que las coordenadas caben en el campo. Devuelve true si OK, devuelve false si nos hemos salido de los límites */
  roverInsideField(x?: number, y?: number): boolean {
    //Hay que tener en cuenta que si el usuario nos ha puesto un width de 1, solamente se podrá generar una coordenada X = 0, NO X = 1
    //Por tanto SIEMPRE x < width i x >= 0 (no pueden ser negativas)

    let currentX, currentY;
    
    //Si no pasamos parámetros compararemos la posición inicial
    if (!x && !y) {
      currentX = rover.initialPosition.x;
      currentY = rover.initialPosition.y;
    }
    //Si pasamos parámetros estaremos comprobando cada movimiento del rover
    else {
      currentX = x; //Parámetro x del método
      currentY = y; //Parámetro y del método
    }

    //Hacemos la validación de x
    if (currentX! >= field.width || currentX! < 0) {
      this.insideField = false;
    }

    //Hacemos la validación de y
    if (currentY! >= field.height || currentY! < 0) {
      this.insideField = false;
    }

    return (this.insideField);
  }

  /* Método con el algoritmo principal para mover el rover */
  mainAlgorithm() {
    console.log("Antes " + this.currentOrientation);     
    //Recorremos las commands
    rover.commands!.forEach(command => {

      //Por cada command haremos un switch y por cada case llamaré a otro método, para modularizar y que sea más fácil leer el código
      switch(command) {
        //Avanzar
        case "A":
          this.advanceCommand();
          break;
        //Girar a la izquierda
        case "L":
          this.turnLeftCommand();
          break;
        //Girar a la derecha
        case "R":
          this.turnRightCommand();
          break;
      }      
    });

    console.log("Después " + this.currentOrientation);
  }

  /* Método para orden de avanzar */
  advanceCommand() {
    console.log("avanzo")
  }

  /* Método para orden girar izquierda */
  turnLeftCommand() {
    switch(this.currentOrientation) {
      case "N":
        this.currentOrientation = "W";
        break;
      case "W":
        this.currentOrientation = "S";
        break;
      case "S":
        this.currentOrientation = "E";
        break;
      case "E":
        this.currentOrientation = "N";
        break;
    }
  }

  /* Método para orden girar derecha */
  turnRightCommand() {
    console.log("derecha")
  }
}
