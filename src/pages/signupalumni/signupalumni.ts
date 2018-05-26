import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signupalumni',
  templateUrl: 'signupalumni.html',
})
export class SignupalumniPage {

  data: any = {};
  passCheck = false;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.data.email='';
    this.data.password='';
    this.data.nama_lengkap='';
    this.data.tanggal_lahir='';
    this.data.nomor_hp='';
    this.data.jurusan='';
    this.data.fakultas='';
    this.data.angkatan='';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupalumniPage');
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
