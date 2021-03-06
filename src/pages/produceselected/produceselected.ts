import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
/**
 * Generated class for the ProduceselectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produceselected',
  templateUrl: 'produceselected.html',
})
export class ProduceselectedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduceselectedPage');
  }
  checkout() {
   this.navCtrl.push(PaymentPage);
 }

}
