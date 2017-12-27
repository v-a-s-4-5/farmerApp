import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyprocedurePage } from '../buyprocedure/buyprocedure';
import { UserProvider } from '../../providers/user/user';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [{
    image: 'https://firebasestorage.googleapis.com/v0/b/farmr-38714.appspot.com/o/farmsimages%2Ffrances-gunn-1.png?alt=media&token=a4cd94fd-fdab-4722-9685-895bafa7d6a9',
    distance: '3.1 mi away',
    address1: 'Smith Family Farm At Atlanta History Center ',
    address2: '130 West Paces Ferry Rd NW, Atlanta GA 30305',
    fav: true
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/farmr-38714.appspot.com/o/farmsimages%2Ffrances-gunn-2.png?alt=media&token=139efa23-879b-4c34-bc7a-fbccca34b034',
    distance: '3.1 mi away',
    address1: 'Smith Family Farm At Atlanta History Center ',
    address2: '130 West Paces Ferry Rd NW, Atlanta GA 30305',
    fav: false
  }
];
  constructor(public navCtrl: NavController, public user: UserProvider) {

  }

  ionViewDidLoad(){
    console.log(this.items);
  }
	gobuy(){
		this.navCtrl.push(BuyprocedurePage);
  }
  
  gotoSearchPage(){
    this.navCtrl.parent.select(1);
  }
}
