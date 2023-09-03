import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conversor-moeda',
  templateUrl: './conversor-moeda.component.html',
  styleUrls: ['./conversor-moeda.component.css'],
 
})
export class ConversorMoedaComponent{
  constructor(private router: Router){}
   
  reais: number = 0;
  outraMoeda: number = 0;
  resultado: number = 0;

   dividir() {
    this.resultado = this.reais / this.outraMoeda;
  }

   enviar(){
    const money=this.reais / this.outraMoeda;
    this.router.navigate(['/pgChecklistGastos',money.toFixed(2)]);
   }

}
