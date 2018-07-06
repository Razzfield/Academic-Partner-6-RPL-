import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams, MenuController } from 'ionic-angular';
import { MainmenuPage } from '../mainmenu/mainmenu';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

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
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    private data: Data,
    public http : Http
  ) {
    this.menuCtrl.enable(false);

  }

  
  signInMhs() {
    if(this.email && this.password) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Mohon tunggu"
    });
    
    loading.present();

      //apiPost
      let input = {
        email: this.email, 
        password: this.password
      };
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


signUp() {
  this.navCtrl.push(SignupPage)
}
}