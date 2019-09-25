import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieAppPage } from '../movie-app/movie-app';

/**
 * Generated class for the UpComingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-up-coming',
  templateUrl: 'up-coming.html',
})
export class UpComingPage {

  movieArray: any = [];
   imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public upcoming: MovieProvider){
    this.loadupcomingdata();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpComingPage');
  }

  
  loadupcomingdata(){
    this.upcoming.getUpComing().subscribe(nowmovies=>{
      this.movieArray=nowmovies['results'];
    }) ;
  }

  Moviedetail(upcoming){
    this.navCtrl.push("MovieDetailPage",upcoming);
  }

  MovieApp(){
    this.navCtrl.push(MovieAppPage);
  }

  getItems(ev: any) {
    //const val = ev.target.value;
    let val = ev.target.value;
    if (val != 0) {
      this.upcoming.searchMovie(val).subscribe(movies => {
        this.movieArray = movies['results'];
      });
    }else {
      this.loadupcomingdata();
  }
}
}
