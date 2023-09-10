import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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

  
}
