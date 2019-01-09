import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AldoPage } from './aldo';

@NgModule({
  declarations: [
    AldoPage,
  ],
  imports: [
    IonicPageModule.forChild(AldoPage),
  ],
})
export class AldoPageModule {}
