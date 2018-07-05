import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
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

  /* signInMhs() {
    if(this.email && this.password) {
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