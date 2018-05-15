import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, AlertController } from 'ionic-angular';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SearchrekanPage } from '../pages/searchrekan/searchrekan';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make LoginPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Main Menu', component: MainmenuPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Daftar Rekan', component : SearchrekanPage},
      { title: 'Forum Alumni', component: ListPage },
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
    this.nav.push(EditprofilePage);
  }
}
