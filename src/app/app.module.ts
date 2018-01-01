import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ComponentsModule } from '../components/components.module';

import { SellprocedurePage } from '../pages/sellprocedure/sellprocedure';
import { BuyprocedurePage } from '../pages/buyprocedure/buyprocedure';
import { Buyproduce2Page } from '../pages/buyproduce2/buyproduce2';
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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddbankaccountPage } from '../pages/addbankaccount/addbankaccount';
import { AddpodsPage } from '../pages/addpods/addpods';
import { PodsPage } from '../pages/pods/pods';
import { EditfarmPage } from '../pages/editfarm/editfarm';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { YourpodPage } from '../pages/yourpod/yourpod';
import { PaymentPage } from '../pages/payment/payment';
import { SelectproducePage } from '../pages/selectproduce/selectproduce';
import { RentpodPage } from '../pages/rentpod/rentpod';
import { ProduceselectedPage } from '../pages/produceselected/produceselected';
import { SendalertsPage } from '../pages/sendalerts/sendalerts';
import { JaneinventoryPage } from '../pages/janeinventory/janeinventory';
import { ProducelivestockPage } from '../pages/producelivestock/producelivestock';
import { FarmdetailPage } from '../pages/farmdetail/farmdetail';
import { UserProvider } from '../providers/user/user';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { FarmsProvider } from '../providers/farms/farms';

var firebaseConfig = {
  apiKey: "AIzaSyB6FnK7-2XtJHZcvWEalA6BkB-YbKae7T0",
  authDomain: "farmr-38714.firebaseapp.com",
  databaseURL: "https://farmr-38714.firebaseio.com",
  projectId: "farmr-38714",
  storageBucket: "farmr-38714.appspot.com",
  messagingSenderId: "502360301964"
};

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    JaneinventoryPage,
    WelcomePage,
    DashboardPage,
    SelectproducePage,
    ContactPage,
    MorePage,
    ProduceselectedPage,
    HomePage,
    FarmersignupPage,
    ProducelivestockPage,
    AddpodsPage,
    PodprocedurePage,
    YourpodPage,
    PodsPage,
    SendalertsPage,
    AddbankaccountPage,
    Buyproduce2Page,
    BuyprocedurePage,
    SellprocedurePage,
    RentpodPage,
    PaymentPage,
    EditfarmPage,
    HistoryPage,
    SignupPage,
    LoginPage,
    FarmdetailPage,
    TabsPage,
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    DashboardPage,
    WelcomePage,
    ProducelivestockPage,
    ContactPage,
    JaneinventoryPage,
    ProduceselectedPage,
    SelectproducePage,
    MorePage,
    PodprocedurePage,
    SendalertsPage,
    SellprocedurePage,
    AddpodsPage,
    YourpodPage,
    AddbankaccountPage,
    BuyprocedurePage,
    Buyproduce2Page,
    PodsPage,
    HomePage,
    RentpodPage,
    EditfarmPage,
    PaymentPage,
    FarmersignupPage,
    HistoryPage,
    SignupPage,
    LoginPage,
    FarmdetailPage,
    TabsPage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    FarmsProvider
  ]
})
export class AppModule {}
