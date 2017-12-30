//import { HttpClient } from '@angular/common/http';
import { Injectable,ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Nav, AlertController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  @ViewChild(Nav) nav: Nav; 
  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase, public alert: AlertController) {
    console.log('Hello UserProvider Provider');
  }

  doLogin(user){
    
    return this.afAuth.auth.signInWithEmailAndPassword(user['email'], user['password']);
  }
  
  checkLogin(){
    return this.afAuth.authState.map( res =>{
     if(res){
       return res.uid;
     }else{
       return null;
     }
    });
  }

  basicSignUp(user){
    let self = this;
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then( res => {
      if(res.uid){
        const newUser = this.afDB.list('/users');
        return newUser.push({
          createdate: new Date().getTime(),
          firstname: user.firstName,
          lastname: user.lastName,
          usertype: 'basic',
          uid: res.uid,
          zipcode: user.zipCode,
        });
      }
    }, err =>{
      this.alert.create({
        title: 'Error',
        message: err.message,
        buttons: [{
          text: 'OK'
        }]
      }).present();
    })
  }

  farmerSignUp(user){
   return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then( res => {
      if(res.uid){
        const newUser = this.afDB.list('/users');
        return newUser.push({
          address: user.address,
          createdate: new Date().getTime(),
          firstname: user.firstName,
          farmname: user.farmName,
          lastname: user.lastName,
          usertype: 'farmer',
          uid: res.uid,
        });
      }
    }, err =>{
      this.alert.create({
        title: 'Error',
        message: err.message,
        buttons: [{
          text: 'OK'
        }]
      }).present();
    })
  }

  signOut(){
    this.afAuth.auth.signOut().then( res => console.log);
  }
}
