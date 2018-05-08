import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfilenyarekanPage } from '../profilenyarekan/profilenyarekan';

@Component({
  selector: 'page-searchrekan',
  templateUrl: 'searchrekan.html',
})
export class SearchrekanPage {
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Willyam',
      'Rhayfa',
      'Sulaiman',
      'Asprak'
    ];
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openModal(){
    const myModal = this.modalCtrl.create(ProfilenyarekanPage);
    myModal.present();
  }
}

