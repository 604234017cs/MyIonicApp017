import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loing',
  templateUrl: 'loing.html',
})
export class LoingPage {
  //property
  loginResult;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoingPage');
  }

  signIn(_username, _password) {
    alert('Hello'+_username +_password);
    if (_password == '1234') {
      this.loginResult = "Pass";
      this.navCtrl.push("PhoneBookPage");
    } else {
      this.loginResult = "Failed";
    }
  }

}//end
