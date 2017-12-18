import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JaneinventoryPage } from './janeinventory';

@NgModule({
  declarations: [
    JaneinventoryPage,
  ],
  imports: [
    IonicPageModule.forChild(JaneinventoryPage),
  ],
})
export class JaneinventoryPageModule {}
