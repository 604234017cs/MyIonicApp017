import { MovieAppPage } from './../pages/movie-app/movie-app';
import { LoingPage } from './../pages/login/loing';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { FlashlightPage } from '../pages/flashlight/flashlight';
import { JsonMenuPage } from '../pages/json-menu/json-menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'List', component: ListPage, icon: 'folder-open' },
      { title: 'Login', component: LoingPage, icon: 'key' },
      { title: 'BarcodeScanner', component: BarcodeScannerPage, icon: 'barcode' },
      { title: 'Flashlight', component: FlashlightPage, icon: 'flash' },
      { title: 'Json Menu', component: JsonMenuPage, icon: 'hand' },
      { title: 'Movie App', component: MovieAppPage, icon: 'logo-youtube' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
