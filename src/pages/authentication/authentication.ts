import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserApi } from '../../shared/sdk';

/**
 * Generated class for the AuthencticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {

  currentPage = 'signIn';

  credential = {
    email: '',
    password: ''
  };

  retypePassword: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userApi: UserApi,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthencticationPage');
  }

  toHome() {
    this.navCtrl.push('HomePage');
  }

  signUp() {
    if ( !this.credential.email || !this.credential.password || !this.retypePassword) {
      this.alertCtrl.create({ message: 'Please complete the field' }).present();
      return;
    }

    this.userApi.create(this.credential).subscribe(res => {
      this.alertCtrl.create({ message: 'Sign Up success'}).present();
    }, err => {
      this.alertCtrl.create({ message: 'Error Bos' }).present();
    });
  }

  signIn(){
    this.userApi.login(this.credential).subscribe(
      success=>{
        this.navCtrl.setRoot("Homepage");
      },
      err => {
        let alert = this.alertCtrl.create({
          title:'Something Went Wrong!',
          subTitle: JSON.stringify(err.message),
          buttons: ['Dismiss']
        });
        alert.present()
      }
    )
  }
}
