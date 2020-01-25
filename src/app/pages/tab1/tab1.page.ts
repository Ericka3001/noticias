import { Component,OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor( private noticiasService:NoticiasService) {

  }

  ngOnInit() {
    //llamamos el servicio
    this.noticiasService.getTopHeadLines().
      subscribe(resp =>{
        console.log ('noticias',resp) // visualizar los datos en la consola  
      });

  }
}