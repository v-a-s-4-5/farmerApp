import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyprocedurePage } from '../buyprocedure/buyprocedure';
import { UserProvider } from '../../providers/user/user';
import { FarmdetailPage } from '../farmdetail/farmdetail';
import { FarmsProvider } from '../../providers/farms/farms';
import { Toggle } from 'ionic-angular/components/toggle/toggle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
  uid:any;
  constructor(public navCtrl: NavController, public user: UserProvider, public farmsProvider: FarmsProvider) {
    this.user.checkLogin().subscribe( res => this.uid = res);
    this.farmsProvider.getFarms().subscribe( res => {
      for(let i=0; i<res.length; i++){
        //console.log(res[i]);
        this.items[i].key = res[i].key;
        this.items[i].image = res[i].image;
        this.items[i].name =  res[i].name;
        this.items[i].address = res[i].address;
        this.items[i].desc1 = res[i].deliverypickup;
        this.items[i].desc2 = res[i].pods;
        let likeObj = res[i].likedby;
        if(likeObj != null && likeObj != undefined){
          Object.keys(likeObj).map((key, index) => {
            if(likeObj[key].uid === this.uid){
              this.items[i].fav = key;
            }
          })
        }else{
          this.items[i].fav = null;
        }
      }
    });
  }

  ionViewDidLoad(){
    //console.log(this.items);
  }
	gobuy(){
		this.navCtrl.push(BuyprocedurePage);
  }
  
  gotoSearchPage(){
    this.navCtrl.parent.select(1);
  }
  showFarmDetail(item){
    this.navCtrl.push(FarmdetailPage, { data: item});
  }
  changeFav(farmkey, choicekey){
    if(choicekey){
      this.farmsProvider.removeFromFavourite(farmkey, choicekey);
    }else{
      this.farmsProvider.addToFavourite(farmkey, this.uid);
    }
  }
}
