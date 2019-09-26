import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
import { MovieProvider } from '../../providers/movie/movie';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export default class VideoPage {
  movieVideo:any=[];
  videos:any=[];
  movie:any;
  url = 'https://www.youtube.com/watch?v=';

  constructor(public navCtrl: NavController, public navParams: NavParams,private youtube: VideoPlayer,public nowmovie: MovieProvider,public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
    this.movieVideo = this.navParams.data;
    this.nowmovie.getVideos(this.movieVideo).subscribe((movie_data:any=[])=>{
     console.log(this.movieVideo);
      this.videos=movie_data['results'];
      console.log(this.videos);
    });
}
openVideo(keyOpen:string){
  let dangerousVideoUrl = 'https://www.youtube.com/embed/' + keyOpen + '?rel=0&showinfo=0';
 //this.youtube.openVideo(keyOpen);
 return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
}


}
