import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';   // ojo con la fuente del httpClient
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
//  (segun la doc) se puede mandar en los headers o en la url 
//para mandar el apikey por los headers

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  headlinesPage = 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ) {
   
    query = apiUrl + query;
    return this.http.get<T>( query, { headers } );
    
  }

  getTopHeadLines(){
    this.headlinesPage++; 

  // return this.http.get <RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c7ceb570e18b45debb640f3c0defe1d1`)
   return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&page=${ this.headlinesPage }`);
  }

  getTopHeadlinesCategoria( categoria: string ) {  

      // verificar si seguimos en la misma categoría
      if ( this.categoriaActual === categoria ) {  
           this.categoriaPage++;
      } else {
              this.categoriaPage = 1;
            this.categoriaActual = categoria;
      }
// return this.http.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c7ceb570e18b45debb640f3c0defe1d1`);
 return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${ categoria }`);  
 // category es el argumento recibido = business/ etc
  }

}
