import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Buyproduce2Page } from '../buyproduce2/buyproduce2';
/**
 * Generated class for the BuyprocedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyprocedure',
  templateUrl: 'buyprocedure.html',
})
export class BuyprocedurePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyprocedurePage');
  }
	gobuy2(){
		this.navCtrl.push(Buyproduce2Page);
	}
}
