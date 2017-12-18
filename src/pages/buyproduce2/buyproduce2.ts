import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ProduceselectedPage } from '../produceselected/produceselected';
/**
 * Generated class for the Buyproduce2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyproduce2',
  templateUrl: 'buyproduce2.html',
})
export class Buyproduce2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Buyproduce2Page');
  }
	payment() {
    let prompt = this.alertCtrl.create({
      title: 'Complete Your Purchase',
      message: "Your Credit Card Will be Charged $10.75 and will be shipped standard by FedEx",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  purchase() {
	let contactModal = this.modalCtrl.create(ProduceselectedPage);
    contactModal.present();
  }
}
