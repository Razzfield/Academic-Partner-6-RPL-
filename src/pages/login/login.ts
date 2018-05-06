import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MainmenuPage } from '../mainmenu/mainmenu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username : string;
  password : string;

  constructor(public navCtrl: NavController) {
  }

 
  logIn(){
    this.navCtrl.setRoot(MainmenuPage);
  }

  signUp(){
    this.navCtrl.push(SignupPage);
  }
}

