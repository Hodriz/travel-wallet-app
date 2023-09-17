import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fale-conosco',                                  
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})


export class FaleConoscoComponent{
  formulario: FormGroup;
  id:any;
  Router: any;
  comentario: any;
  comentarios:string[] = [];
  comentariosTexto:string="";
  comentarioId:any;
  emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
  private apiService: ApiService, private router:Router ){
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['',[Validators.required, Validators.pattern(this.emailRegex)]],
      post: ['',Validators.required],  
  });
  }


cadastroConcluido=false;

carregarComentarios(): void {
  this.apiService.getComentarios().subscribe((data)=>{
    this.comentarios=data.map((coment)=>"Id:"+coment.id+"\n"+"Comentário: \n"+coment.post);
    this.comentariosTexto=this.comentarios.join('\n'+'*****'+'\n');
    
  })
}

cadastrarComentario() {
  const comentario = this.formulario.value as FaleConoscoComponent;
  this.apiService.enviarComentario(comentario).subscribe(() => {
    console.log('Comentário enviado com sucesso!');
    this.cadastroConcluido=true;
    this.formulario.reset();
  }, (error) => {
    console.error('Erro ao enviar o comentário:', error);
  });
}

excluirComentario(){
  this.apiService.excluirComentario(this.id);
}

updateComentario() {

  try {
    const novoComentario = this.formulario.get('post')?.value;

    if (this.comentarioId && novoComentario) {
      this.apiService.atualizarComentario(this.comentarioId, { post:novoComentario });
      console.log('Valor de novoComentario:', novoComentario);
      console.log('Valor de comentarioId:', this.comentarioId);
      console.log('Comentário atualizado com sucesso!');
    } else {
      console.error('Formato inválido ou ID não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao atualizar o comentário:', error);
  }
}

async buscarComentarioPorId() {
  const id = this.route.snapshot.paramMap.get("id");
  
  try {
    const comentarioObservable = this.apiService.getComentarioPorId(this.id);

    comentarioObservable.subscribe((comentario) => {
   
      if (comentario && typeof comentario === 'object' && 'post' in comentario) {
        this.formulario.get('post')?.setValue(comentario.post);
        this.comentarioId=comentario.id;
        console.log(this.comentarioId);
        console.log(this.id);
      } else {
        console.error('Formato de comentário inválido:', comentario);
      }
    });
  } catch (error) {
    console.error('Erro ao buscar o comentário:', error);
  }

  
}
};
