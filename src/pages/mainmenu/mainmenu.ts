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

  /* getGroup(){
    //apiGet
      this.http.get(this.data.BASE_URL+"/todo_read.php?id_user="+this.id_user<--tolong sesuaikan will wkwk).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status==200){
        this.groups = response.data;
        group = true;
      }
      else {
        Alert("No Data");
        group = false;
      }
    });
    //apiGet  
  } */

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
