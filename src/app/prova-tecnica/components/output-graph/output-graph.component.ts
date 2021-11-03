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

  //Icono FontAwesome
  icon = faRobot;

  constructor() { }

  ngOnInit(): void {
    //Cargamos datos
    this.fieldWidth = field.width;
    this.fieldHeight = field.height;

    //Generamos arrays de filas y columnas
    this.columnsArr = this.generateArray(this.fieldWidth);
    this.rowsArr = this.generateArray(this.fieldHeight);
    console.log(this.columnsArr)
    console.log(this.rowsArr)
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
