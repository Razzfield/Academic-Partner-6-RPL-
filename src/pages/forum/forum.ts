import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  deleteThread(){ 
    let confirm = this.alertCtrl.create({
    title: 'Konfirmasi Penghapusan',
    message: 'Apakah anda yakin ingin menghapus thread ini?',
    buttons: [
      {
        text: 'Tidak',
        cssClass: 'test',
        handler: () => {
          console.log('No clicked');
        }
      },
      {
        text: 'Iya',
        
        handler: () => {
          this.navCtrl.pop();   
          console.log('Yes clicked');
        }
      }
    ]
  });
  confirm.present();
}
  tambahKomentar(){
    let a
  }
}
