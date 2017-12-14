import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyfarmsPage } from './nearbyfarms';

@NgModule({
  declarations: [
    NearbyfarmsPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyfarmsPage),
  ],
})
export class NearbyfarmsPageModule {}
