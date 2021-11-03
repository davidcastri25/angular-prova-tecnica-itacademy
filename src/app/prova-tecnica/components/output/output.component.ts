import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  showGraph!: boolean; //Propiedad que controla si enseñamos la representación gráfica

  constructor() { }

  ngOnInit(): void {
    this.showGraph = false;
  }

  /* Método que enseña la representación gráfica */
  showGraphSignal() {
    this.showGraph = true;
  }


}
