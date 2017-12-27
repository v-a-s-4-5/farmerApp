import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmdetailPage } from './farmdetail';

@NgModule({
  declarations: [
    FarmdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmdetailPage),
  ],
})
export class FarmdetailPageModule {}
