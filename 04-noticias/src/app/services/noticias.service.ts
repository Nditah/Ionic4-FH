import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }

  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=ve&apiKey=9892f520cf8a473c89a44fd97cc03bb6`);
  }
}
