import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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
