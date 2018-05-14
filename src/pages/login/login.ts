import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MainmenuPage } from '../mainmenu/mainmenu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username : string;
  password : string;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

 
   
  

  presentLoading() {
    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Mohon tunggu... internet anda jelek",
      duration: 600
    });
    loader.present();

    setTimeout(() => {
    this.navCtrl.setRoot(MainmenuPage);
  }, 660);
}

  signUp(){
    this.navCtrl.push(SignupPage);
  }
}

