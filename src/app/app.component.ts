import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FarmersignupPage } from '../pages/farmersignup/farmersignup';
import { NearbyfarmsPage } from '../pages/nearbyfarms/nearbyfarms';
import { SearchPage } from '../pages/search/search';
import { MorePage } from '../pages/more/more';
import { HistoryPage } from '../pages/history/history';
import { PodprocedurePage } from '../pages/podprocedure/podprocedure';
import { SellprocedurePage } from '../pages/sellprocedure/sellprocedure';
import { BuyprocedurePage } from '../pages/buyprocedure/buyprocedure';
import { AddbankaccountPage } from '../pages/addbankaccount/addbankaccount';
import { Buyproduce2Page } from '../pages/buyproduce2/buyproduce2';
import { AddpodsPage } from '../pages/addpods/addpods';
import { EditfarmPage } from '../pages/editfarm/editfarm';
import { YourpodPage } from '../pages/yourpod/yourpod';
import { PaymentPage } from '../pages/payment/payment';
import { RentpodPage } from '../pages/rentpod/rentpod';
import { HomePage } from '../pages/home/home';
import { ScreensPage } from '../pages/screens/screens';
import { SendalertsPage } from '../pages/sendalerts/sendalerts';
import { PodsPage } from '../pages/pods/pods';
import { ProducelivestockPage } from '../pages/producelivestock/producelivestock';
import { JaneinventoryPage } from '../pages/janeinventory/janeinventory';
import { Podprocedure2Page } from '../pages/podprocedure2/podprocedure2';
import { ProduceselectedPage } from '../pages/produceselected/produceselected';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Buyproduce2Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
