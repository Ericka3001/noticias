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

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ) {
   // función para armar el argumento del get
    query = apiUrl + query;
    return this.http.get<T>( query, { headers } );
    // esta <T> permite que la función sea genérica
    // recibe cualquier tipo dato y retorna el tipo de dato recibido
    // por eso es posible que en la llamada permanezca el observable
  }

  getTopHeadLines(){
  // return this.http.get <RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c7ceb570e18b45debb640f3c0defe1d1`)
   return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us`);
  }

  getTopHeadlinesCategoria( categoria: string ) {  
// como sería la petición sin armar
 // return this.http.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c7ceb570e18b45debb640f3c0defe1d1`);

 return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${ categoria }`);  // category es el argumento recibido = business/ etc
  }

}
