import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private url:string = "https://newsapi.org/v2/top-headlines?country=ve";
  private apiKey:string = environment.apiKey;
  private headLinePage:number = 0;

  constructor(private http:HttpClient) { }

  getTopHeadlines(){
    this.headLinePage++;
    return this.http.get<RespuestaTopHeadlines>(`${this.url}&page=${this.headLinePage}&apiKey=${this.apiKey}`);
  }

  getTopHeadlinesCategoria(categoria:string){
    return this.http.get<RespuestaTopHeadlines>(`${this.url}&category=${categoria}&apiKey=${this.apiKey}`);
  }
}
