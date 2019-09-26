import { SocialSharing } from '@ionic-native/social-sharing';
import { MovieAppPage } from './../pages/movie-app/movie-app';
import {HttpClientModule} from '@angular/common/http/';
import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { FlashlightPage } from './../pages/flashlight/flashlight';
import { BarcodeScannerPage } from './../pages/barcode-scanner/barcode-scanner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoingPage } from '../pages/login/loing';
import { SMS } from '@ionic-native/sms/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Flashlight } from '@ionic-native/flashlight';
import { MovieProvider } from '../providers/movie/movie';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [
    MyApp,
    HomePage,BarcodeScannerPage,FlashlightPage,JsonMenuPage,
    ListPage,LoingPage,MovieAppPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,LoingPage,BarcodeScannerPage,FlashlightPage,JsonMenuPage,MovieAppPage,
  ],
  providers: [
    StatusBar,SMS,BarcodeScanner,Flashlight,
    SplashScreen,VideoPlayer,TextToSpeech,SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
