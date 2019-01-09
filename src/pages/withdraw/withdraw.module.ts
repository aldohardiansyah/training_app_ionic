import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WithdrawPage } from './withdraw';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    WithdrawPage,
  ],
  imports: [
    IonicPageModule.forChild(WithdrawPage),
    FlexLayoutModule
  ],
})
export class WithdrawPageModule {}
