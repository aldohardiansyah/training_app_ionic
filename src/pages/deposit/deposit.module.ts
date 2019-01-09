import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicPageModule } from 'ionic-angular';
import { DepositPage } from './deposit';

@NgModule({
  declarations: [
    DepositPage,
  ],
  imports: [
    IonicPageModule.forChild(DepositPage),
    FlexLayoutModule
  ],
})
export class DepositPageModule {}
