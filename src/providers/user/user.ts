//import { HttpClient } from '@angular/common/http';
import { Injectable,ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Nav } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  @ViewChild(Nav) nav: Nav; 
  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase) {
    console.log('Hello UserProvider Provider');
  }

  doLogin(user){
    
    return this.afAuth.auth.signInWithEmailAndPassword(user['email'], user['password']);
  }
  
  checkLogin(){
    this.afAuth.authState.subscribe( res =>{
     console.log(res.uid);
    });
  }

  basicSignUp(user){
    let self = this;
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then( res => {
      if(res.uid){
        const newUser = this.afDB.list('/users');
        newUser.push({
          createdate: new Date().getTime(),
          firstname: user.firstName,
          lastname: user.lastName,
          usertype: 'basic',
          uid: res.uid,
          zipcode: user.zipCode,
        }).then( res => {
          if(res){
            localStorage.setItem('usertype','basic');
            console.log("user added");
          }
        });
      }
    }, err =>{
      console.log(err);
    })
  }

  farmerSignUp(user){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then( res => {
      if(res.uid){
        const newUser = this.afDB.list('/users');
        newUser.push({
          address: user.address,
          createdate: new Date().getTime(),
          firstname: user.firstName,
          farmname: user.farmName,
          lastname: user.lastName,
          usertype: 'farmer',
          uid: res.uid,
        }).then( res => {
          if(res){
            console.log("User Added");
          }
        });
      }
    }, err =>{
      console.log(err);
    })
  }
}
