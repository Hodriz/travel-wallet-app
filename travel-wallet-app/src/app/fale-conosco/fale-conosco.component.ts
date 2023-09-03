import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})


export class FaleConoscoComponent {

  usuario = {
    nome: '',
    email: '',
}

constructor(private route: ActivatedRoute){}

cadastroConcluido=false;

cadastrarUsuario() {

  const usuarioJSON = JSON.stringify(this.usuario);
  localStorage.setItem('usuario', usuarioJSON);

  this.cadastroConcluido = true;

  console.log('Usuário encontrado:', this.usuario);
}

};
