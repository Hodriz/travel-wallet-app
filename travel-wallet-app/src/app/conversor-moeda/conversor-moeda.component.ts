import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-conversor-moeda',
  templateUrl: './conversor-moeda.component.html',
  styleUrls: ['./conversor-moeda.component.css'],
 
})
export class ConversorMoedaComponent implements OnInit{
  constructor(private router: Router, private ApiService:ApiService ){}

  realDolar: any;
  realEuro:any;
   
  reais: number = 0;
  outraMoeda: number = 0;
  resultado: number = 0;
  data:number=0;

   dividir() {
    this.resultado = this.reais / this.outraMoeda;
  }

   enviar(){
    const money=this.reais / this.outraMoeda;
    this.router.navigate(['/pgChecklistGastos',money.toFixed(2)]);
   }

   async buscarDados() {
    try {
      const data = await this.ApiService.fetchData('https://economia.awesomeapi.com.br/json/last/USD-BRL');
      const data2 = await this.ApiService.fetchData('https://economia.awesomeapi.com.br/json/last/EUR-BRL');
      this.realDolar=data.USDBRL.high;
      this.realEuro=data2.EURBRL.high;
      console.log('Dados recebidos:', this.realDolar);
      console.log('Dados recebidos:', this.realEuro);
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  
  ngOnInit() {
    this.buscarDados();
  }
  

}
