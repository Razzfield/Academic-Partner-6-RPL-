import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { ViewmemberPage } from '../viewmember/viewmember';
import { FriendPopoverPage } from '../friend-popover/friend-popover';
import { CreateTeamPage } from '../create-team/create-team';

@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }

  lihat(){
    this.navCtrl.push(ViewmemberPage);
  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(FriendPopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  createTeam(){
    this.navCtrl.push(CreateTeamPage);
  }
}

