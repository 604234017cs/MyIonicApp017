import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieAppPage } from '../movie-app/movie-app';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  movieArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';


  constructor(public navCtrl: NavController, public navParams: NavParams, public popular: MovieProvider) {
    this.loadpopulardata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Popularpage');
  }


  loadpopulardata(){
    this.popular.getPopular().subscribe(populars=>{
      this.movieArray=populars['results'];
    }) ;
  }

  Moviedetail(popular) {
    this.navCtrl.push("MovieDetailPage", popular);
  }

  Movieapp(){
    this.navCtrl.push(MovieAppPage);
  }

}
