import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private apiUrl = 'assets/rastreio.json'; // Caminho para o arquivo JSON

  constructor(private http: HttpClient) { }

  getEndereco(cep: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.find(endereco => endereco.cep === cep)) // Filtra o endereço pelo CEP
    );
  }
}
