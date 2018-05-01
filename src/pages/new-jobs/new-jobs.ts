import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';


@Component({
  selector: 'page-new-jobs',
  templateUrl: 'new-jobs.html',
})
export class NewJobsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewJobsPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sukses!',
      subTitle: 'Selamat, Sign-up Berhasil!, Silahkan login.',
      buttons: ['Okay']
    });
    alert.present();
  }

  createNewJob(){
    this.navCtrl.setRoot(HelloIonicPage);
  }

}
