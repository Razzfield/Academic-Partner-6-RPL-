import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MainmenuPage } from '../mainmenu/mainmenu';
import { SignupalumniPage } from '../signupalumni/signupalumni';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  testRadioOpen: boolean;
  testRadioResult;

  username : string;
  password : string;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

 
   
  

  presentLoading() {
    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Mohon tunggu... internet anda jelek",
      duration: 1200
    });
    loader.present();

    setTimeout(() => {
    this.navCtrl.setRoot(MainmenuPage);
  }, 1260);
}

signUp() {
  let alert = this.alertCtrl.create();
  alert.setTitle('Anda ingin sign up sebagai apa?');

  alert.addInput({
    type: 'radio',
    label: 'Mahasiswa',
    value: '1',
    checked: true
  });

  alert.addInput({
    type: 'radio',
    label: 'Alumni',
    value: '2'
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'Okay',
    handler: data => {
      console.log('Checkbox data:', data);
      this.testRadioOpen = false;
      this.testRadioResult = data;
      if (this.testRadioResult==1){
        this.navCtrl.push(SignupPage);
      }
      else {
        this.navCtrl.push(SignupalumniPage);
      }
    }
  });
  alert.present().then(() => {
    this.testRadioOpen = true;
    
  });
}
}