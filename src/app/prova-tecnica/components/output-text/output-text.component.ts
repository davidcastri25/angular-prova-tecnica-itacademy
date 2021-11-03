import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { field, rover} from '../../data/data';
import { Field, RoverPosition } from '../../interfaces/interfaces';

@Component({
  selector: 'app-output-text',
  templateUrl: './output-text.component.html',
  styleUrls: ['./output-text.component.scss']
})

export class OutputTextComponent implements OnInit {
  /* PROPERTIES */
  //Propiedades de control
  validCommands: boolean = true; //Para validar de nuevo que el array de órdenes tiene valores válidos
  insideField: boolean = true; //Para validar que estemos dentro del campo
  hasLanded: boolean = false; //Indica si el rover ha aterrizado correctamente (por tanto, si las coordenadas iniciales hacen que aterrice en el campo o ya se sale desde un principio)

  //Propiedades para el output
  fieldSize!: Field;

  initialPosition!: RoverPosition;
  initialOrientation!: 'N' | 'S' | 'E' | 'W';
  commands!: string[];
  finalPosition!: RoverPosition;
  finalOrientation!: 'N' | 'S' | 'E' | 'W';

  //Event Emitter que hará que se muestre el graph
  @Output() showGraph = new EventEmitter();

  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    // 0 - Reseteamos propiedades
    this.validCommands = true;
    this.insideField = true;
    this.hasLanded = false;

    // 1 - Validamos array de órdenes
    this.validCommands = this.dataService.validateAndSetCommands();

    //Solo seguiremos si this.validCommands es true
    if (this.validCommands) {

      // 2 - Configurar los dos objetos (field i rover)
      this.dataService.setData();

      //3 - Validamos si hemos aterrizado dentro del campo o ya de entrada estamos fuera
      this.insideField = this.dataService.roverInsideField();
      
      //Solo seguiremos si this.insideField es true
      if (this.insideField) {
        this.hasLanded = true; //Ha aterrizado

        //4- Iniciamos algoritmo (nos devolverà false si se ha salido del campo)
        this.insideField = this.dataService.mainAlgorithm();
      }       
    }

    //Asignamos datos a las propiedades output desde los objetos importados field y rover
    this.fieldSize = field;
    this.initialOrientation = rover.initialOrientation;
    this.initialPosition = rover.initialPosition;
    this.commands = rover.commands!;
    this.finalOrientation = rover.finalOrientation!;
    this.finalPosition = rover.finalPosition!;
  }

  /* Método para navegar de vuelta al formulario */
  navigateToForm() {
    this.router.navigate(["/form"]);
  }

  /* Método que emitirá al padre que muestre Graph */
  showGraphSignal() {
    this.showGraph.emit();
  }
}
