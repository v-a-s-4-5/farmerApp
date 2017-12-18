import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
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
import { NearbyfarmsPage } from '../pages/nearbyfarms/nearbyfarms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddbankaccountPage } from '../pages/addbankaccount/addbankaccount';
import { AddpodsPage } from '../pages/addpods/addpods';
import { PodsPage } from '../pages/pods/pods';
import { EditfarmPage } from '../pages/editfarm/editfarm';
import { YourpodPage } from '../pages/yourpod/yourpod';
import { PaymentPage } from '../pages/payment/payment';
import { RentpodPage } from '../pages/rentpod/rentpod';
import { ScreensPage } from '../pages/screens/screens';
import { ProduceselectedPage } from '../pages/produceselected/produceselected';
import { SendalertsPage } from '../pages/sendalerts/sendalerts';
import { JaneinventoryPage } from '../pages/janeinventory/janeinventory';
import { ProducelivestockPage } from '../pages/producelivestock/producelivestock';
@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    JaneinventoryPage,
    WelcomePage,
    ContactPage,
    MorePage,
    ProduceselectedPage,
    HomePage,
    FarmersignupPage,
    ProducelivestockPage,
    AddpodsPage,
    NearbyfarmsPage,
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
    TabsPage,
	ScreensPage
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
    ProducelivestockPage,
    ContactPage,
    JaneinventoryPage,
    ProduceselectedPage,
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
    NearbyfarmsPage,
    SignupPage,
    LoginPage,
    TabsPage,
	ScreensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
