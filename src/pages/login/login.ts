import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { MainmenuPage } from '../mainmenu/mainmenu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  testRadioOpen: boolean;
  testRadioResult;

  email : any;
  password : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController
    //private data: Data,
    //public http : Http
  ) {

  }

  presentLoading() {
        let loader = this.loadingCtrl.create({
          content: "Mohon tunggu",
          duration: 600
        });
        loader.present();
    
        setTimeout(() => {
        this.navCtrl.setRoot(MainmenuPage);
      
      }, 660);
    }
  /* signInMhs() {
    if(this.nim && this.password) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Mohon tunggu",
      duration: 900
    });
    
    loading.present();

      //apiPost
      let input = {
        email: this.email, 
        password: this.password
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/Login_Mahasiswa.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal <-- ini masih gatau benernya gimana
        
        this.navCtrl.setRoot(MainmenuPage);
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Login Gagal',      
            message : 'Email dan password anda tidak cocok atau belum terdaftar.',
            buttons: ['OK']
          });
          alert.present();
          
      }    
      });
      //apiPost    
    }
  }

  signInAlmn() {
    if(this.email && this.password) {
    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Mohon tunggu",
      duration: 900
    });
    
    loader.present();

      //apiPost
      let input = {
        email: this.email, 
        password: this.password
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/Login_Alumni.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal <-- ini juga
        
        this.navCtrl.setRoot(MainmenuPage);
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Login Gagal',      
            message : 'Email dan password anda tidak cocok atau belum terdaftar.',
            buttons: ['OK']
          });
          alert.present();
          
      }    
      });
      //apiPost    
    }
  }

  */

signUp() {
  this.navCtrl.push(SignupPage)
}
}