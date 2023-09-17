
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorMoedaComponent } from './conversor-moeda/conversor-moeda.component';
import { ChecklistGastosComponent } from './checklist-gastos/checklist-gastos.component';
import { CombustivelGastosComponent } from './combustivel-gastos/combustivel-gastos.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';


const routes: Routes = [
  { path: 'pgConversorMoeda', component: ConversorMoedaComponent },
  { path: 'pgChecklistGastos', component:  ChecklistGastosComponent},
  { path: 'pgChecklistGastos/:money', component:  ChecklistGastosComponent},
  { path: 'pgCombustivelGastos', component:  CombustivelGastosComponent},
  { path: 'pgFaleConosco', component:  FaleConoscoComponent},
  { path: 'posts/:id', component:  FaleConoscoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
