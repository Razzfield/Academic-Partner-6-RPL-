import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EditprofilePage } from '../editprofile/editprofile';
import { SearchrekanPage } from '../searchrekan/searchrekan';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userData:any;
  nama: any;
  nim: any;
  email: any;
  id_line: any;
  nomor_hp: any;
  tanggal_lahir: any;
  jurusan: any;
  fakultas: any;
  angkatan: any

  constructor(public navCtrl: NavController, public navParams: NavParams , private data: Data, public http: Http) {
    this.data.getData().then((data)=>
    {
      console.log(data);
      this.userData = data;
      this.nama = data.nama_lengkap;
      this.nim = data.nim;
      this.email = data.email;
      this.id_line = data.id_line;
      this.nomor_hp = data.nomor_hp;
      this.tanggal_lahir = data.tanggal_lahir;
      this.jurusan = data.jurusan;
      this.fakultas = data.fakultas;
      this.angkatan = data.angkatan;
    })
  }


  editProfile(){
    this.navCtrl.push(EditprofilePage)
  }

  findPartner(){
    this.navCtrl.push(SearchrekanPage)
  }
}
