import { Component,ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
 
   @ViewChild(IonSegment,{static: true}) segment: IonSegment;   // para que por defecto se tenga una opción seleccionada

   // estas categorias son copiadas desde la pag api 
   //https://newsapi.org/docs/endpoints/top-headlines  seccción category
   // que serán utilizadas con un *ngFor para los botones de la cabecera
  categorias=['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor() {}

  ngOnInit(){
    this.segment.value = this.categorias[0];  // para que la opción seleccionada por defecto sea business
  }

}
