import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScreensPage } from './screens';

@NgModule({
  declarations: [
    ScreensPage,
  ],
  imports: [
    IonicPageModule.forChild(ScreensPage),
  ],
})
export class ScreensPageModule {}
