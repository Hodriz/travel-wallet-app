import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ConversorMoedaComponent } from './conversor-moeda/conversor-moeda.component';
import { ChecklistGastosComponent } from './checklist-gastos/checklist-gastos.component';
import { CombustivelGastosComponent } from './combustivel-gastos/combustivel-gastos.component';
import { ComponenteHeaderComponent } from './componente-header/componente-header.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    RodapeComponent,
    ChecklistGastosComponent,
    CombustivelGastosComponent,
    ConversorMoedaComponent,
    ComponenteHeaderComponent,
    FaleConoscoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ConversorMoedaComponent
  ],
  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule{ }

