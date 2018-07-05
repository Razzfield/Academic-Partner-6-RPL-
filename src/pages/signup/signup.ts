import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public menuCtrl: MenuController,
    public loadCtrl: LoadingController
    //private data : Data,
    //public http : http
  ) {
    // this.testApi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp(){
    if(this.email && this.password && this.nama_lengkap && this.tanggal_lahir && this.id_line && this.nomor_hp && this.nim && this.jurusan && this.fakultas && this.angkatan) {

      let loading = this.loadCtrl.create({
        content: 'Mohon Tunggu'
      });

      loading.present();

      //apiPost goes here
      /*  let input = {
          email:this.email;
          password:this.password;
          nama_lengkap:this.nama_lengkap;
          tanggal_lahir:this.tanggal_lahir;
          id_line:this.id_line;
          nomor_hp:this.nomor_hp;
          nim:this.nim;
          jurusan:this.jurusan;
          fakultas:this.fakultas;
          angkatan:this.angkatan;
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/SignUpMahasiswa.php", input).subscribe(tolong sesuain api will, btw nanti fungsi dibawah masuk ke sini)
      */
    }}

  //if (response.status=200) {
    showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sukses!',
      subTitle: 'Selamat, Sign-up Anda Berhasil!, Silahkan login.',
      buttons: ['Okay']
    });
    alert.present();
    this.navCtrl.setRoot(LoginPage);
  }
  //}
}