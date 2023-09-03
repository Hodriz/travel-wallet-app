import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  teste:string="Total"
  @Input()alcool!: number;
  @Input()diesel!: number;
  @Input()gasolina!: number;

  constructor(){}

  ngOnInit(){

  }
}
