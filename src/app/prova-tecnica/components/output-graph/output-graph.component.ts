import { Component, OnInit } from '@angular/core';

import { faRobot } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../services/data.service';
import { field, rover} from '../../data/data';
import { Field, RoverPosition } from '../../interfaces/interfaces';


@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.scss']
})

export class OutputGraphComponent implements OnInit {
  /* PROPERTIES */
  //Datos de los objetos
  fieldWidth!: number; //Ancho genera columnas
  fieldHeight!: number; //Alto genera filas
  columnsArr!: number[];
  rowsArr!: number[];
  currentPositionX!: number;
  currentPositionY!: number;
  coordinatesArrX: number[] = []; //Almacenará todas las coordenadas x después de la inicial
  coordinatesArrY: number[] = []; //Almacenará todas las coordenadas y después de la inicial

  //Icono FontAwesome
  icon = faRobot;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //Cargamos datos
    this.fieldWidth = field.width;
    this.fieldHeight = field.height;
    this.currentPositionX = rover.initialPosition.x;
    this.currentPositionY = rover.initialPosition.y;
    this.coordinatesArrX = this.dataService.getCoordinatesX();
    this.coordinatesArrY = this.dataService.getCoordinatesY();

    //Generamos arrays de filas y columnas
    this.columnsArr = this.generateArray(this.fieldWidth);
    this.rowsArr = this.generateArray(this.fieldHeight);
    
    //Recorremos array de posiciones y asignamos, es decir, movemos el rover
    console.log (this.coordinatesArrX)
    console.log (this.coordinatesArrY)
  }

  /* Método para crear array filas o columnas */
  generateArray(lenght: number): number[]{
    let newArr: number[] = [];

    for (let i = 0; i < lenght; i++) {
      newArr.push(i);  
    }
    return newArr;
  }

}
