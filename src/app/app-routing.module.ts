import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './prova-tecnica/components/form/form.component';
import { OutputComponent } from './prova-tecnica/components/output/output.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent    
  },
  {
    path: 'output',
    component: OutputComponent
  },  
  {
    path: '**',
    redirectTo: '/form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
