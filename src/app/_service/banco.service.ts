import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Banco } from '../_model/banco';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  url: string = `${environment.HOST}/bancos`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Banco[]>(this.url);
  }
}
