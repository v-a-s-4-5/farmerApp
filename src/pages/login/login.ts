import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserProvider } from '../../providers/user/user';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {
    email: '',
    password: ''
  };
  constructor(public navCtrl: NavController, 
              public afDB: AngularFireDatabase, 
              public userProvider: UserProvider, 
              public alert: AlertController, 
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    let loading = this.loadingCtrl.create({
      content: 'Log in..'
    });
    loading.present();
    this.userProvider.doLogin(this.user).then( res => {
      if(res){
        const user = this.afDB.list('/users', ref => {
          return ref.orderByChild('uid').equalTo(res.uid)
        }).valueChanges();
        user.subscribe(response => {
          localStorage.setItem('usertype',response[0]['usertype']);
          loading.dismiss();
          this.navCtrl.setRoot(TabsPage);
        });
      }
    }, err => {
      this.alert.create({
        title: 'Error',
        message: err.message,
        buttons: [{
          text: 'OK'
        }]
      }).present();
      loading.dismiss();
    })
    
  }
  openForgotPassword(){
    this.alert.create({
      title: 'Forgot Password',
      inputs: [{
        type: 'email',
        placeholder: 'Enter Registered Email',
      }],
      buttons: [{
        text: 'Send Email',
        handler: data => {
          this.userProvider.checkEmailExist(data[0]);
        }
      }]
    }).present();
  }

}
