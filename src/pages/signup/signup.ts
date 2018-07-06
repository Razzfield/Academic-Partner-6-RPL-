import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  
  email:any;
  password:any;
  nama_lengkap:any;
  tanggal_lahir:any;
  id_line:any;
  nomor_hp:any;
  nim:any;
  jurusan:any;
  fakultas:any;
  angkatan:any;
  regexpmail = new RegExp(/^[A-Za-z0-9._%+-]+@apps.ipb.ac.id$/);
  regexpnama = new RegExp(/^\w.{1,23}$/);
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public menuCtrl: MenuController,
    public loadCtrl: LoadingController,
    private data : Data,
    public http : Http,
    public toastCtrl: ToastController
  ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  check(){
    if(this.email === '' || this.password === '' || this.nama_lengkap === '' || this.tanggal_lahir === '' ||
      this.id_line === '' || this.nomor_hp === '' || this.nim === '' || this.jurusan === '' || this.fakultas === '' || this.angkatan){
      let alert = this.alertCtrl.create({
        title: 'Silahkan isi dengan lengkap',
        buttons: ['OK']
      });
      alert.present();
    } else if(this.regexpnama.test(this.nama_lengkap) == false) {
       let alert = this.alertCtrl.create({
        title: 'Nama min. 2 karakter dan max. 24 karakter',
        buttons: ['OK']
      }); 
      alert.present();
    } else if(this.regexpmail.test(this.email) == false) {
      let alert = this.alertCtrl.create({
        title: 'Hanya email @apps.ipb.ac.id yang diperbolehkan',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.signUp();
    }
  }
  signUp(){
    if(1) {
      let loading = this.loadCtrl.create({
        content: 'Mohon Tunggu'
      });

      loading.present();
      
      let input = {
          email:this.email,
          password:this.password,
          nama_lengkap:this.nama_lengkap,
          tanggal_lahir:this.tanggal_lahir,
          id_line:this.id_line,
          nomor_hp:this.nomor_hp,
          nim:this.nim,
          jurusan:this.jurusan,
          fakultas:this.fakultas,
          angkatan:this.angkatan,
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/SignUpMahasiswa.php", input).subscribe(data => {
        let response = data.json();
        console.log(response); 
        if(response.status==200){    
          this.data.logout();
          
          this.data.login(response.data,"user");//ke lokal
          
          this.navCtrl.setRoot(LoginPage);      
          loading.dismiss();

        }
        else {
          loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Failed Creating New Account',      
              buttons: ['OK']
            });
            alert.present();      
            loading.dismiss();
        }    
        });
        //apiPost  
      }
    }
}