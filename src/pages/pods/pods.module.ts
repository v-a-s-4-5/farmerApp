import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PodsPage } from './pods';

@NgModule({
  declarations: [
    PodsPage,
  ],
  imports: [
    IonicPageModule.forChild(PodsPage),
  ],
})
export class PodsPageModule {}
