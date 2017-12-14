import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SellprocedurePage } from '../pages/sellprocedure/sellprocedure';
import { BuyprocedurePage } from '../pages/buyprocedure/buyprocedure';
import { PodprocedurePage } from '../pages/podprocedure/podprocedure';
import { SearchPage } from '../pages/search/search';
import { MorePage } from '../pages/more/more';
import { HistoryPage } from '../pages/history/history';
import { WelcomePage } from '../pages/welcome/welcome';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { FarmersignupPage } from '../pages/farmersignup/farmersignup';
import { NearbyfarmsPage } from '../pages/nearbyfarms/nearbyfarms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    WelcomePage,
    ContactPage,
    MorePage,
    HomePage,
    FarmersignupPage,
    NearbyfarmsPage,
    PodprocedurePage,
    BuyprocedurePage,
    SellprocedurePage,
    HistoryPage,
    SignupPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    WelcomePage,
    ContactPage,
    MorePage,
    PodprocedurePage,
    SellprocedurePage,
    BuyprocedurePage,
    HomePage,
    FarmersignupPage,
    HistoryPage,
    NearbyfarmsPage,
    SignupPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
