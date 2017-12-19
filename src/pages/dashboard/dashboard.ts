import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
@ViewChild('barCanvas') barCanvas;
 
    barChart: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["$876", "$1,6k", "$1,2k", "$945", "$789", "$0", "$0"],
                datasets: [{
                    label: '',
                    data: [12, 19, 3, 5, 2, 3,7],
                    backgroundColor: [
                        'Green',
                        'Green',
						'Green',
						'Green',
						'Green',
						'Green',
						'Green'
                    ],
                    borderColor: [
                        'Green',
                        'Green',
						'Green',
						'Green',
						'Green',
						'Green',
						'Green'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
  }

}
