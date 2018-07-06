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

  regexpmail = new RegExp(/^[A-Za-z0-9._%+-]+@apps.ipb.ac.id$/);
  regexpnama = new RegExp(/^\w.{1,23}$/);
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
      let toast = this.toastCtrl.create({
        message: 'Silahkan isi dengan lengkap',
        duration: 1500,
        position: 'bottom'
      });
      toast.present();
    } else if(this.regexpnama.test(this.nama_lengkap) == false) {
       let toast = this.toastCtrl.create({
        message: 'Nama min. 2 karakter dan max. 24 karakter',
        duration: 1500,
        position: 'bottom'
      }); 
      toast.present();
    } else if(this.regexpmail.test(this.email) == false) {
      let toast = this.toastCtrl.create({
        message: 'Hanya email @apps.ipb.ac.id yang diperbolehkan',
        duration: 1500,
        position: 'bottom'
      });
      toast.present();
    }else{
      this.signUp();
    }
  }
  signUp(){

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
  