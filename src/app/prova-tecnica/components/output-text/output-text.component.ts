import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-output-text',
  templateUrl: './output-text.component.html',
  styleUrls: ['./output-text.component.scss']
})

export class OutputTextComponent implements OnInit {
  /* PROPERTIES */
  validCommands: boolean = true; //Para validar de nuevo que el array de órdenes tiene valores válidos
  insideField: boolean = true; //Para validar que estemos dentro del campo
  hasLanded: boolean = false; //Indica si el rover ha aterrizado correctamente (por tanto, si las coordenadas iniciales hacen que aterrice en el campo o ya se sale desde un principio)

  constructor(private dataService: DataService) { }

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
  }

}
