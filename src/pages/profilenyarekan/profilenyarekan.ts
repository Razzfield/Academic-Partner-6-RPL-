import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-profilenyarekan',
  templateUrl: 'profilenyarekan.html',
})
export class ProfilenyarekanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public navView: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilenyarekanPage');
  }

  closeModal(){
    this.navCtrl.pop();
  }
}
