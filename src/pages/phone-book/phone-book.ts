import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'Nasree', telephone: '0822697162', imageUrl: 'assets/imgs/f1.jpg'},
                  {name: 'Suwaibah', telephone: '0935951819', imageUrl: 'assets/imgs/f2.jpg'},
                  {name: 'Danai', telephone: '0882372538', imageUrl: 'assets/imgs/f3.jpg'},
                  {name: 'Arawee', telephone: '0864845806', imageUrl: 'assets/imgs/f4.jpg'},
                  {name: 'Ake', telephone: '0934721197', imageUrl: 'assets/imgs/f5.jpg'}
                  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);
  }


}//end class
