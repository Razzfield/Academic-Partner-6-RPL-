import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewJobPage } from '../new-job/new-job';
import { NewJobsPage } from '../new-jobs/new-jobs';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  username : string;
  password : string;

  constructor(public navCtrl: NavController) {

  }

  gotoNewJobPage(){
    this.navCtrl.setRoot(NewJobPage);
  }

  gotoNewReg(){
    this.navCtrl.push(NewJobsPage);
  }
}
