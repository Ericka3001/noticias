import { Component,OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article []=[];   // es el que se recorrerá en el lado del html

  constructor( private noticiasService:NoticiasService) {

  }
  
  ngOnInit() {
    this.cargarNoticias();
  }

  loadData( event ) {

    console.log(event);
    this.cargarNoticias( event );
  }

  // el signo de interrogación por argumento opcional
  cargarNoticias( event? ) {
    this.noticiasService.getTopHeadLines()
      .subscribe( resp => {
        console.log('noticias x', resp );

        if ( resp.articles.length === 0 ) {    //cuando es 0 se debe cancelar el infinite scroll
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        // this.noticias = resp.articles;
        this.noticias.push( ...resp.articles );

        if ( event ) {
          event.target.complete();
        }

      });
  }
}
