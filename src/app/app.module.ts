import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { SearchrekanPage } from '../pages/searchrekan/searchrekan';
import { ProfilenyarekanPage } from '../pages/profilenyarekan/profilenyarekan';
import { ViewmemberPage } from '../pages/viewmember/viewmember';
import { SignupalumniPage } from '../pages/signupalumni/signupalumni';
import { FriendPopoverPage } from '../pages/friend-popover/friend-popover';
import { ForumPage } from '../pages/forum/forum';
import { JudulforumPage } from '../pages/judulforum/judulforum';
import { NewThreadsPage } from '../pages/new-threads/new-threads';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ItemDetailsPage,
    ListPage,
    ProfilePage,
    SignupPage,
    SignupalumniPage,
    MainmenuPage,
    EditprofilePage,
    SearchrekanPage,
    ProfilenyarekanPage,
    ViewmemberPage,
    FriendPopoverPage,
    JudulforumPage,
    ForumPage,
    NewThreadsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ItemDetailsPage,
    ListPage,
    ProfilePage,
    SignupPage,
    SignupalumniPage,
    MainmenuPage,
    EditprofilePage,
    SearchrekanPage,
    ProfilenyarekanPage,
    ViewmemberPage,
    FriendPopoverPage,
    JudulforumPage,
    ForumPage,
    NewThreadsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
