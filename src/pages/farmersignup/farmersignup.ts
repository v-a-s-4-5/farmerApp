import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
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
  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
  }

  signUp(){
    this.userProvider.farmerSignUp(this.user);
  }

}
