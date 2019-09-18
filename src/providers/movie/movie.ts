import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  public basaURL="https://api.themoviedb.org/3/";
  public apikey="api_key=db9cace4a17ad4844c5ad2fbf1a7b1d5";
  
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }


  getNowPlaying(){
  const url = this.basaURL + 'movie/now_playing?' + this.apikey;
  return this.http.get(url);
  }

  getUpComing(){
    const url = this.basaURL + 'movie/upcoming?' + this.apikey;
    return this.http.get(url);
  }
}
