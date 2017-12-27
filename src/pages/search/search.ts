import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { FarmdetailPage } from '../farmdetail/farmdetail';

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
    image: 'https://firebasestorage.googleapis.com/v0/b/farmr-38714.appspot.com/o/farmsimages%2Ffrances-gunn-1.png?alt=media&token=a4cd94fd-fdab-4722-9685-895bafa7d6a9',
    distance: '3.1 mi away',
    address1: 'Smith Family Farm At Atlanta History Center ',
    address2: '130 West Paces Ferry Rd NW, Atlanta GA 30305',
    toggle: false,
    label1: 'Delivery/Pickup Abilities',
    desc1: 'Drop Zone: 123 Ferry St, Brookhaven, GA 30209',
    label2: 'Pods Available',
    desc2: 'Drop Zone: 123 Ferry St, Brookhaven, GA 30209',
    label3: 'Delivery/Pickup Abilities',
    desc3: 'Drop Zone: 123 Ferry St, Brookhaven, GA 30209',
    fav: true
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/farmr-38714.appspot.com/o/farmsimages%2Ffrances-gunn-2.png?alt=media&token=139efa23-879b-4c34-bc7a-fbccca34b034',
    distance: '3.1 mi away',
    address1: 'Smith Family Farm At Atlanta History Center ',
    address2: '130 West Paces Ferry Rd NW, Atlanta GA 30305',
    toggle: false,
    label1: 'Delivery/Pickup Abilities',
    desc1: 'Drop Zone: 123 Ferry St, Brookhaven, GA 30209',
    label2: 'Pods Available',
    desc2: 'Drop Zone: 123 Ferry St, Brookhaven, GA 30209',
    label3: 'Delivery/Pickup Abilities',
    desc3: 'Drop Zone: 123 Ferry St, Brookhaven, GA 30209',
    fav: false
  }
];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log(this.items);
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
