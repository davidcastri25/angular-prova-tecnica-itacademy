import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
