import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sukses!',
      subTitle: 'Selamat, Sign-up Anda Berhasil!, Silahkan login.',
      buttons: ['Okay']
    });
    alert.present();
  }
  doneRegist(){
    this.navCtrl.setRoot(LoginPage);
  }
}
