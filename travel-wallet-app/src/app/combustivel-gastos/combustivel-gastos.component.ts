import { Component } from '@angular/core';


@Component({
  selector: 'app-combustivel-gastos',
  templateUrl: './combustivel-gastos.component.html',
  styleUrls: ['./combustivel-gastos.component.css']
})
export class CombustivelGastosComponent {
  
  distancia: number = 0;
  consumoMedio: number = 0;
  precoAlcool: number = 0;
  precoDiesel: number = 0;
  precoGasolina: number = 0;

  resultadoAlcool: number = 0;
  resultadoDiesel: number = 0;
  resultadoGasolina: number = 0;

  calcular() {
    this.resultadoAlcool = (this.distancia / this.consumoMedio) * this.precoAlcool;
    this.resultadoDiesel = (this.distancia / this.consumoMedio) * this.precoDiesel;
    this.resultadoGasolina = (this.distancia / this.consumoMedio) * this.precoGasolina;
 
}
}