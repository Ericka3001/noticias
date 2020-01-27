import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia:Article;    // para el html
  @Input() indice: number;    // este será desplegado en el html

  constructor(private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  abrirNoticia() {
    // console.log('Noticia', this.noticia.url);  // 
   
     const browser = this.iab.create(this.noticia.url, '_system');
    // _system es para que abra en el navegador por defecto
    // este plugin funciona tb en desktop

  }

  async lanzarMenu(){
      const actionSheet = await this.actionSheetCtrl.create({
        
        buttons: [ {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Favorito',
          icon: 'star',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Favorito clicked');
          }
        },  {
          text: 'Cancelar',
          icon: 'close',
          cssClass: 'action-dark',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clicked');
          }
        }]
      });
      await actionSheet.present();
    }
  
  }
  

