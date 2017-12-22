import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyprocedurePage } from '../buyprocedure/buyprocedure';
import { UserProvider } from '../../providers/user/user';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public user: UserProvider) {

  }
	gobuy(){
		this.navCtrl.push(BuyprocedurePage);
  }
  
  ionViewDidLoad(){
    this.user.checkLogin();
  }
}
