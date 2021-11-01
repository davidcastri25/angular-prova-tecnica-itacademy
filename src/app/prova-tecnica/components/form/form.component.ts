import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  });

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
      this.initialForm.reset();

      //Navegamos a la página de output 
    }

  }

}
