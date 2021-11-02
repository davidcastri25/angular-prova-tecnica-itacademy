import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  /* Reactive Forms (utilizo FormBuilder) */   
  initialForm: FormGroup = this.formBuilder.group({
    width: [, [Validators.required, Validators.min(1)]], //El primer valor del array está vacío porque no quiero que el campo aparezca con valor predefinido
    height: [, [Validators.required, Validators.min(1)]],
    x: [, [Validators.required, Validators.min(0)]], //Aquí sí permito el 0, porque la coordenada (0, 0) existirá
    y: [, [Validators.required, Validators.min(0)]],
    orientation: ['', Validators.required], //Aquí me interesa que el valor por defecto sea un string vacío, ya que así aparecerá Escolleix tipo placeholder
    // commands: ['', Validators.required]
    commands: this.formBuilder.array( [//Es un array de form controls, NO es un array de arrays 

    ], Validators.required) // Tiene que haber al menos una orden
  });

  /* Control a part per poder afegir commands */
  newCommand: FormControl = this.formBuilder.control('');

  /* GETTER: nos devolverá el array de formcontrols commands */
  get commandsArr() {
    return this.initialForm.get('commands') as FormArray;
  }


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  

  /* Método para no llenar tanto el template y hacer la validación de forma más dinámica. Retornarà true si el número es decimal o si hay errores y el input ha sido tocado */
  validateNumberFields(field: string) {
    if (this.initialForm.controls[field].value % 1 != 0) { //Evaluamos si el número és decimal, si lo es no lo aceptaremos
      return true;
    }
    else {
      return this.initialForm.controls[field].errors && this.initialForm.controls[field].touched;
    }  
  }

  validateSelectFields(field:string) {
    return this.initialForm.controls[field].errors && this.initialForm.controls[field].touched;
  }

  /* Método para añadir nueva command */
  addCommand() {
    if (this.newCommand.invalid) {
      return;
    }
    else {
      //Cogemos el control commands de nuestro initialForm (mediante el getter) y hacemos push de un nuevo formcontrol
      this.commandsArr.push(this.formBuilder.control(this.newCommand.value, Validators.required)); //Required porque si borramos el valor luego nos debe seguir saliendo error
    }
  }

  /* Método para borrar command creado */
  deleteCommand(index: number) {
    this.commandsArr.removeAt(index);
  }  

  /* Método que lanzará el botón submit del formulario */
  startLanding() {

    //Si el formulario NO es válido
    if (this.initialForm.invalid) {
      //Marcaremos todos los campos como tocados para forzar los errores si no han salido ya
      this.initialForm.markAllAsTouched();
    }
    //Si el formulario SÍ es válido
    else {
      //Guardamos todos los datos
      console.log(this.initialForm.value);

      //Reseteamos el formulario
      this.initialForm.reset({
        width: null,
        height: null,
        x: null,
        y: null,
        orientation: '',
        commands: ['']
      });
      this.newCommand.reset(''); //Reseteamos el campo newcommand
      this.commandsArr.controls = []; //Reseteamos el array

      //Navegamos a la página de output 
    }

  }

}
