import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController   } from 'ionic-angular';

/**
 * Generated class for the YourpodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yourpod',
  templateUrl: 'yourpod.html',
})
export class YourpodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourpodPage');
  }
	feed() {
    let alert = this.alertCtrl.create({
      title: '<img src="../assets/imgs/chicken-card.png"><h3>Feed Your Chicken</h3>',
      subTitle: 'Feed your chicken and gain 10 points added to your account',
	  cssClass: 'alertcsscustom',
      buttons: ['Feed Chicken']
    });
    alert.present();
  }
  fertilizer() {
    let alert = this.alertCtrl.create({
      title: '<img src="../assets/imgs/fertilize-card.png"><h3>Ferlilize your pod</h3>',
      subTitle: 'Fertilize your pod and and gain 5 points added to your account',
	  cssClass: 'alertcsscustom',
      buttons: ['Fertilize Pod']
    });
    alert.present();
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: '<h4>Alert</h4>',
      subTitle: 'Your Subscription is coming to an end, Would you lke to renew now?',
      buttons: [
        {
          text: 'No',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    alert.present();
  }
  pesticide() {
    let alert = this.alertCtrl.create({
      title: '<img src="../assets/imgs/pesticide-icon.png"><h3>Add Pesticide</h3>',
      subTitle: 'Add Pesticide your pod and and gain 5 points added to your account',
	  cssClass: 'alertcsscustom',
      buttons: ['Add Pesticide']
    });
    alert.present();
  }
}
