import { Injectable,ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Nav, AlertController } from 'ionic-angular';

/*
  Generated class for the FarmsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FarmsProvider {

  constructor(public afAuth: AngularFireAuth, 
              public afDB: AngularFireDatabase, 
              public alert: AlertController) {
            
    console.log('Hello FarmsProvider Provider');
  }

  getFarms(){
    return this.afDB.list('/farms').snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    });
  }

  removeFromFavourite(farmkey, choicekey){
    this.afDB.list('/farms/'+farmkey+'/likedby').remove(choicekey).then( res=>console.log(res), 
    err=> console.log(err));
  }

  addToFavourite(farmkey, uid){
    this.afDB.list('/farms/'+farmkey+'/likedby').push({uid: uid}).then( res => console.log(res), 
    err => console.log(err));
  }
}
