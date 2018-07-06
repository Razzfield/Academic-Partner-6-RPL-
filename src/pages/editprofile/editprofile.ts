import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Data } from '../../provider/data';
import { ProfilePage } from '../profile/profile';
import { MainmenuPage } from '../mainmenu/mainmenu';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  userData: any;

  password: any;
  newpassword: any;
  confirmpassword: any;

  email:any;
  nama_lengkap:any;
  tanggal_lahir:any;
  id_line:any;
  nomor_hp:any;
  nim:any;
  jurusan:any;
  fakultas:any;
  angkatan:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http, private data: Data, public loadCtrl: LoadingController) {

      // console.log(data);
      this.data.getData().then((data) => {


      this.email = data.email;
      this.nama_lengkap = data.nama_lengkap;
      this.tanggal_lahir = data.tanggal_lahir;
      this.id_line = data.id_line;
      this.nomor_hp = data.nomor_hp;
      this.nim = data.nim;
      this.jurusan = data.jurusan;
      this.fakultas = data.fakultas;
      this.angkatan = data.angkatan;
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }
  save(){
    if(this.email && this.nama_lengkap && this.tanggal_lahir && this.id_line && this.nomor_hp && this.nim && this.jurusan && this.fakultas && this.angkatan && this.password && this.password && (this.newpassword==this.confirmpassword)){
      
      let alert = this.alertCtrl.create({
        subTitle: 'Maaf, fitur ini masih ada kesalahan pada .php sehingga belum tersedia juga.',
        buttons: ['yah..']
      });
      alert.present();
      /*
      //apiPost
      let input = {
        password: this.password,
        newpassword: this.newpassword,
        confirmpassword: this.confirmpassword,
        email: this.email,
        nama_lengkap: this.nama_lengkap,
        tanggal_lahir: this.tanggal_lahir,
        id_line: this.id_line,
        nomor_hp: this.nomor_hp,
        nim: this.nim,
        jurusan: this.jurusan,
        fakultas: this.fakultas,
        angkatan: this.angkatan,
        

      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"Edit_Profie_User",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        if(!this.newpassword) this.navCtrl.setRoot(ProfilePage);  
        else this.navCtrl.setRoot(MainmenuPage);
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Failed Editing Account',      
            buttons: ['OK']
          });
          alert.present();      
          loading.dismiss();
      }    
      });
      //apiPost  
      */
    } 
  }
}  

