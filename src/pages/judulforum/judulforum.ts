import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { NewThreadsPage } from '../new-threads/new-threads';

@Component({
  selector: 'page-judulforum',
  templateUrl: 'judulforum.html',
})
export class JudulforumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JudulforumPage');
  }

  view(){
    this.navCtrl.push(ForumPage);
  }
  addthread(){
    this.navCtrl.push(NewThreadsPage);
  }
}