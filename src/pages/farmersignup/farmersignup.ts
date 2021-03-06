import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
/**
 * Generated class for the FarmersignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farmersignup',
  templateUrl: 'farmersignup.html',
})
export class FarmersignupPage {
  user = {
    firstName: '',
    lastName: '',
    farmName: '',
    address: '',
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
    this.userProvider.farmerSignUp(this.user).then( res => {
      if(res){
        localStorage.setItem('usertype','farmer');
        loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
      }else{
        loading.dismiss();
      }
    });
  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }
}
