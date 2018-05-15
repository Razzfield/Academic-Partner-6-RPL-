import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewmemberPage } from '../viewmember/viewmember';

@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }

  lihat(){
    this.navCtrl.push(ViewmemberPage);
  }
}
