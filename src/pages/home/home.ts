import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dummyLists: any;
  toggleBalance: boolean = true;

  constructor(public navCtrl: NavController) {
    this.dummyLists = [
      { name: 'Tokopedia', value: 100000},
      { name: 'Bukalapak', value: 200000},
      { name: 'Gojek', value: 300000},
    ];
  }

  toWithdraw() {
    this.navCtrl.push('WithdrawPage');
  }

  toDeposit() {
    this.navCtrl.push('DepositPage');
  }

  toggle() {
    this.toggleBalance = !this.toggleBalance;
  }

}
