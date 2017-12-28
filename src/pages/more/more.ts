import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
  }

  logout(){
    this.userProvider.signOut().then( res => {
      console.log(res);
      localStorage.removeItem('usertype');
      this.navCtrl.setRoot(WelcomePage);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
