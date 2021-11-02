import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { OutputComponent } from './components/output/output.component';
import { AppRoutingModule } from '../app-routing.module';
import { OutputTextComponent } from './components/output-text/output-text.component';




@NgModule({
  declarations: [
    FormComponent,
    OutputComponent,
    OutputTextComponent
  ],
  exports: [
    FormComponent,
    OutputComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule //Para usar reactive forms
  ]
})
export class ProvaTecnicaModule { }
