import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendalertsPage } from './sendalerts';

@NgModule({
  declarations: [
    SendalertsPage,
  ],
  imports: [
    IonicPageModule.forChild(SendalertsPage),
  ],
})
export class SendalertsPageModule {}
