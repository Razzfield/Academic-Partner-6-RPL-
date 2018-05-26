import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.data.email='';
    this.data.password='';
    this.data.nama_lengkap='';
    this.data.tanggal_lahir='';
    this.data.id_line='';
    this.data.nomor_hp='';
    this.data.nim='';
    this.data.jurusan='';
    this.data.fakultas='';
    this.data.angkatan='';
  
    
    
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
