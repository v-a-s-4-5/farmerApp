import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase, public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.userProvider.doLogin(this.user).then( res => {
      if(res){
        const user = this.afDB.list('/users', ref => {
          return ref.orderByChild('uid').equalTo(res.uid)
        }).valueChanges();
        user.subscribe(response => {
          localStorage.setItem('usertype',response[0]['usertype']);
          this.navCtrl.setRoot(TabsPage);
        });
      }
    }, err => console.log(err))
    
  }

}
