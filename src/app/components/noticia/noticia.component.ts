import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';   // para compartir en redes sociales
import { DataLocalService } from 'src/app/services/data-local.service';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia:Article;    // para el html
  @Input() indice: number;    // este será desplegado en el html

  constructor(private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController,
              private socialSharing:SocialSharing,
              private dataLocalService:DataLocalService) { }

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
            this.socialSharing.share(
              this.noticia.title,
              this.noticia.source.name,
              '',
              this.noticia.url
            )
          }
        }, {
          text: 'Favorito',
          icon: 'star',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Favorito clicked');
            this.dataLocalService.guardarNoticia( this.noticia );

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
  

