import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl='http://localhost:3000/posts';


  constructor(private http: HttpClient) {}

  async fetchData(url: string): Promise<any> {
    try {
      const observable = this.http.get('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
      const data = await lastValueFrom(observable);

      return data;
    } catch (error) {
      throw new Error(`Erro na requisição: ${error}`);
    }

  }

  enviarComentario(comentario: FaleConoscoComponent): Observable<any> {
    return this.http.post('http://localhost:3000/posts', comentario);
  }//

  getComentarios(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/posts');
  }//

  atualizarComentario2(id: any, post: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, post);
  }

  async atualizarComentario(id: any, post: any){
    const url=await fetch(`${this.apiUrl}/${id}`,{
      method:'UPDATE',headers: {'Access-Control-Allow-Origin': '*', 'content-type': 'aplication/json'}
    });
  }

  getComentarioPorId(id:string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }//

  async excluirComentario(id: number){
    const url=await fetch(`${this.apiUrl}/${id}`,{
      method:'DELETE'
    });
  } //
}
