import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  detail: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';
  constructor(public navCtrl: NavController, public navParams: NavParams, public moviedetail:MovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
    this.detail = this.navParams.data;
    console.log(this.detail);

  };

}
