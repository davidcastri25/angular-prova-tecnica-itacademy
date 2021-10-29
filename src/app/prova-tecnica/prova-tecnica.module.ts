import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { OutputComponent } from './components/output/output.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    FormComponent,
    OutputComponent
  ],
  exports: [
    FormComponent,
    OutputComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProvaTecnicaModule { }
