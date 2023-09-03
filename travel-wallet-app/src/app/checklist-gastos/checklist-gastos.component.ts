import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checklist-gastos',
  templateUrl: './checklist-gastos.component.html',
  styleUrls: ['./checklist-gastos.component.css'],
  template:"<h2>coponente destino</h2><p>Dados recebidos:{{parametro}}</p>"
 })
export class ChecklistGastosComponent implements OnInit {

  money:number | undefined;

constructor(private route: ActivatedRoute){}

  ngOnInit() {
    const num=this.route.snapshot.paramMap.get('money')
    this.money = Number(num);
  }

 
}
