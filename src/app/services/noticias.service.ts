import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';   // ojo con la fuente del httpClient
import { RespuestaTopHeadlines } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    // hacemos que la respuesta del get será un observable 
    // del tipo de la interfaz definida RespuestaTopHeadline
    
    return this.http.get <RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c7ceb570e18b45debb640f3c0defe1d1
    `)
  }
}
