import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
 
   @ViewChild(IonSegment,{static: true}) segment: IonSegment;   // para que por defecto se tenga una opción seleccionada

  categorias=['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];    // para desplegar en el html

  constructor( private noticiasService: NoticiasService) {}

  ngOnInit(){
    this.segment.value = this.categorias[0];  // para que la opción seleccionada por defecto sea business
    this.cargarNoticias( this.categorias[0] );
  }

cargarNoticias( categoria: string, event? ) {
         
          this.noticiasService.getTopHeadlinesCategoria( categoria )
          .subscribe( resp => {
            console.log("Categoría:   ",resp); 
            this.noticias.push( ...resp.articles );

            if ( event ) {
              event.target.complete();
            }
          });
  }

  cambioCategoria( event ) {
    this.noticias = [];   // para que cuando hay cambio de categoria no se haga push y se carguen solo las noticias categoria
                          // pueden probar sin esto
    this.cargarNoticias( event.detail.value );

  }
  loadData( event ) {
     // en el segment.value del html tenemos la categoría
     // para llamar a cargarNoticias
     console.log("Categoría:   ", this.segment.value); 
    this.cargarNoticias( this.segment.value, event );
    
  }


}
