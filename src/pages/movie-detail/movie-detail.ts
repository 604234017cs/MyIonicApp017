import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';

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
  moviedata:any=[];
  detail: any = [];
  movie: any;
  movieDetails: any;
  backdrop_path: any;
  geners: any;
  videos: any = [];
  Budget: any;
  status: any;
  revenue: any;
  imgPath = 'https://image.tmdb.org/t/p/original/';
  playing: boolean;
 
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public moviedetail:MovieProvider,private tts: TextToSpeech,
    private socialSharing:SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
    this.detail = this.navParams.data;
    console.log(this.detail);

  };


  openVideo(key){
    this.navCtrl.push("VideoPage",key);
}

talk(textOrOptions:string){
  this.tts.speak(textOrOptions);
}
 
stop(){
  this.tts.speak("").then((value)=>{
  this.playing=false;
  });
  }
  
  shareFace(movie){
    this.socialSharing.shareViaFacebook(movie.overview,movie.poster_path) 
    .then(() =>{
    console.log("Message sent");
    this.moviedata = this.navParams.data;
    }).catch((error) =>{
    console.log("Fail posting");
    })
    }
}


