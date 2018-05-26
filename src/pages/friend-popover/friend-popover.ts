import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-friend-popover',
  templateUrl: 'friend-popover.html',
})
export class FriendPopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendPopoverPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
