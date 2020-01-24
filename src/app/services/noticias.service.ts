import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';   // ojo con la fuente del httpClient


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get (`https://newsapi.org/v2/sources?apiKey=c7ceb570e18b45debb640f3c0defe1d1`)
  }
}
