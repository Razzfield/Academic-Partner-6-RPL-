import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, LoadingController, AlertController } from 'ionic-angular';
import { ViewmemberPage } from '../viewmember/viewmember';
import { FriendPopoverPage } from '../friend-popover/friend-popover';
import { CreateTeamPage } from '../create-team/create-team';

@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
    //private data : Data, 
    //public http : Http
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }


  
}
