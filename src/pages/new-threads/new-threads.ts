import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-new-threads',
  templateUrl: 'new-threads.html',
})
export class NewThreadsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewThreadsPage');
  }
  createNewThread(){
    let alert = this.alertCtrl.create({
      title: 'Sukses!',
      subTitle: 'Thread anda berhasil ditambahkan.',
      buttons: ['Okay']
    });
    alert.present();
    this.navCtrl.pop();
  }
}
