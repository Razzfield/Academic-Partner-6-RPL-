import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  data: any ={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.data.email="";
    this.data.password="";  
    this.data.nama_lengkap="";
    this.data.tanggal_lahir="";
    this.data.id_line="";
    this.data.nomor_hp="";
    this.data.nim="";
    this.data.jurusan="";
    this.data.fakultas="";
    this.data.angkatan="";
    this.data.minat="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }
  
  save(){
    this.navCtrl.pop()
  }

  notif() {
    let alert = this.alertCtrl.create({
      title: 'Berhasil!',
      subTitle: 'Profile anda telah berhasil anda sunting.',
      buttons: ['Okay']
    });
    alert.present();
  }
  input(){
    
  }
}
