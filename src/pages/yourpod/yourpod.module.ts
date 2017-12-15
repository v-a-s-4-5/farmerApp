import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourpodPage } from './yourpod';

@NgModule({
  declarations: [
    YourpodPage,
  ],
  imports: [
    IonicPageModule.forChild(YourpodPage),
  ],
})
export class YourpodPageModule {}
