import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieAppPage } from '../movie-app/movie-app';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the TopRatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-rated',
  templateUrl: 'top-rated.html',
})
export class TopRatedPage {

  
  movieArray: any = [];
   imgPath = 'https://image.tmdb.org/t/p/original/';


  constructor(public navCtrl: NavController, public navParams: NavParams,public toprated: MovieProvider) {
    this.loadutoprateddata();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TopRatedPage');
  }

  loadutoprateddata(){
    this.toprated.getUpComing().subscribe(nowmovies=>{
      this.movieArray=nowmovies['results'];
    }) ;
  }

  Moviedetail(toprated){
    this.navCtrl.push("MovieDetailPage",toprated);
  }

  MovieApp(){
    this.navCtrl.push(MovieAppPage);
  }

}
