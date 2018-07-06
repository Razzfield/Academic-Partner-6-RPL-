import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, LoadingController, AlertController, MenuController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

      userData:any;
      nama:any;
      nim: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    private data : Data, 
    public http : Http
    ) {
      this.menuCtrl.enable(true);
      this.data.getData().then((data)=>
      {
        console.log(data);
        this.userData =  data;
        this.nama = data.nama_lengkap;
        this.nim = data.nim;
      })
    }
  
     
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }


  
}
