import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { FarmdetailPage } from '../farmdetail/farmdetail';
import { FarmsProvider } from '../../providers/farms/farms';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  toggle: boolean = false;
  items = [{
    key: '',
    image: '',
    distance: '3.1 mi away',
    name: '',
    address: '',
    toggle: false,
    label1: 'Delivery/Pickup Abilities',
    desc1: '',
    label2: 'Pods Available',
    desc2: '',
    label3: 'Livestock / Produce Available',
    desc3: 'Black Berries, Tommato, Blue Barries, Pumpkin',
    fav: null
  },
  {
    key: '',
    image: '',
    distance: '4.1 mi away',
    name: '',
    address: '',
    toggle: false,
    label1: 'Delivery/Pickup Abilities',
    desc1: '',
    label2: 'Pods Available',
    desc2: '',
    label3: 'Livestock / Produce Available',
    desc3: 'Black Berries, tommato, Blue Barries, Pumpkin',
    fav: null
  }
];
uid: any;
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public farmsProvider: FarmsProvider,
              public user: UserProvider,) {
    let data = this.items;
    this.items = [];
    this.user.checkLogin().subscribe( res => this.uid = res);
    this.farmsProvider.getFarms().subscribe( res => {
      this.items = [];
      for(let i=0; i<res.length; i++){
        data[i].key = res[i].key;
        data[i].image = res[i].image;
        data[i].name =  res[i].name;
        data[i].address = res[i].address;
        data[i].desc1 = res[i].deliverypickup;
        data[i].desc2 = res[i].pods;
        let likeObj = res[i].likedby;
        if(likeObj != null && likeObj != undefined){
          Object.keys(likeObj).map((key, index) => {
            if(likeObj[key].uid === this.uid){
              data[i].fav = key;
            }
          })
        }else{
          data[i].fav = null;
        }
        if(data[i].fav){
          this.items.unshift(data[i]);
        }else{
          this.items.push(data[i]);
        }
      }
    });
  }

  ionViewDidLoad() {
    
  }
  showAlert() {
    let prompt = this.alertCtrl.create({
      message: "Call (555)5555-5555",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Call',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  showFarmDetail(item){
    this.navCtrl.push(FarmdetailPage, { data: item});
  }
}
