import { Component, ViewChild } from '@angular/core';

import {  Platform, MenuController, Nav, AlertController } from 'ionic-angular';
import { Data } from '../provider/data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SearchrekanPage } from '../pages/searchrekan/searchrekan';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';
import { ForumPage } from '../pages/forum/forum';
import { JudulforumPage } from '../pages/judulforum/judulforum';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage :any;
  pages: Array<{title: string, component: any}>;

  userData: any;
  name: any;
  nim: any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public data: Data,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController
  ) {

    

    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Main Menu', component: MainmenuPage },
      { title: 'Daftar Rekan', component : SearchrekanPage},
      { title: 'Halaman Diskusi', component: JudulforumPage },
      { title: 'Logout', component: LoginPage },
      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //Session
    this.data.isLogin().then((value)=>{
      if(value){
        this.rootPage = LoginPage;
        
      } else {
         this.rootPage = MainmenuPage;
      }    
    });
    //set
    this.data.getData().then((data)=>
    {
      console.log(data);
      this.userData = data;
      this.name = data.nama_lengkap;
      this.nim = data.nim;
    })
    
    
  }
  


  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    if(page.component==LoginPage){
      let confirm = this.alertCtrl.create({
        title: 'Tunggu dulu..',
        message: 'Apakah anda yakin ingin logout ?',
        buttons: [
          {
            text: 'Tidak',
            cssClass: 'test',
            handler: () => {
              console.log('No clicked');
            }
          },
          {
            text: 'Iya',
            
            handler: () => {
              this.nav.setRoot(page.component);   
              console.log('Yes clicked');
              this.data.logout();
            }
          }
        ]
      });
      confirm.present();
    }
    else{
      this.nav.setRoot(page.component);
    }
  }
  editProfile(){
    
    this.menu.close();
    this.nav.push(ProfilePage);
  }
  
}
