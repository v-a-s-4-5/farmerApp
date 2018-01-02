import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { FarmersignupPage } from '../farmersignup/farmersignup';
import { UserProvider } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
	  //this.userProvider.signOut();
		this.userProvider.checkLogin().subscribe( res => {
			if(res){
				console.log("inside if");
				this.navCtrl.setRoot(TabsPage);
			}
		}, err => console.log(err));
  }
	login(){
		this.navCtrl.push(LoginPage);
	}
	signup(){
		//this.navCtrl.push(SignupPage);
		this.navCtrl.push(FarmersignupPage);
	}
	farmersignup(){
		
	}

}
