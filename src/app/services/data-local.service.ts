import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';




@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];


  constructor(private storage: Storage
               ) { }

  guardarNoticia( noticia: Article ) {
    const existe = this.noticias.find( noti => noti.title === noticia.title );

    if ( !existe ) {
      this.noticias.unshift( noticia ); // poner al inicio del arreglo
      this.storage.set('favoritos', this.noticias ); // se está grabando todo el arreglo de noticias
      console.log('not grab',this.noticias);
    }   
    
  }
}
