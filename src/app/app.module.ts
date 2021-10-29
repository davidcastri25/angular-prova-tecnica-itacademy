import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaTecnicaModule } from './prova-tecnica/prova-tecnica.module';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProvaTecnicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
