import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellprocedurePage } from '../sellprocedure/sellprocedure';
import { BuyprocedurePage } from '../buyprocedure/buyprocedure';
import { PodprocedurePage } from '../podprocedure/podprocedure';
import { SearchPage } from '../search/search';
import { MorePage } from '../more/more';
import { HistoryPage } from '../history/history';
import { WelcomePage } from '../welcome/welcome';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { FarmersignupPage } from '../farmersignup/farmersignup';
import { NearbyfarmsPage } from '../nearbyfarms/nearbyfarms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddbankaccountPage } from '../addbankaccount/addbankaccount';
import { AddpodsPage } from '../addpods/addpods';
import { EditfarmPage } from '../editfarm/editfarm';
import { YourpodPage } from '../yourpod/yourpod';
import { PaymentPage } from '../payment/payment';
import { RentpodPage } from '../rentpod/rentpod';


/**
 * Generated class for the ScreensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-screens',
  templateUrl: 'screens.html',
})
export class ScreensPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreensPage');
  }
  next(page){
	this.navCtrl.push(page);
  }

}
