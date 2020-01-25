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
    //llamamos el servicio
    this.noticiasService.getTopHeadLines().
      subscribe(resp =>{
        console.log ('noticias',resp) // visualizar los datos en la consola  
       // this.noticias=resp.articles ;  
       //eventualmente se trae mas información y no se desea sobreescribir los artículos

        // los 3 puntos se usan para que se trabaje de forma independiente
        // cada elemento del arreglo que será desplegado en el HTML 
        this.noticias.push( ...resp.articles ); 
      });

  }
}
