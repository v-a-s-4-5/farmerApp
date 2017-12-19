import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyprocedurePage } from '../buyprocedure/buyprocedure';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
	gobuy(){
		this.navCtrl.push(BuyprocedurePage);
	}
}
