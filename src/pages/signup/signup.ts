import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {
    firstName: '',
    lastName: '',
    zipCode: '',
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController, 
              public userProvider: UserProvider, 
              public alert: AlertController,
              public loadingCtrl: LoadingController) {
  }

  signUp(){
    let loading = this.loadingCtrl.create({
      content: 'Registering..'
    });
    loading.present();
    this.userProvider.basicSignUp(this.user).then( res => {
      if(res){
        localStorage.setItem('usertype','basic');
        loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
      }else{
        loading.dismiss();
      }
    });
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
