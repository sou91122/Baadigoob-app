import { Component } from '@angular/core';

// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Orders',
      url: '/order',
      icon: 'cart'
    },
    {
      title: 'Wishlist',
      url: '/wishlist',
      icon: 'heart'
    },
    {
      title: 'New Arrival',
      url: '/newarrival',
      icon: 'pricetags'
    },
    {
      title: 'Shop by Category',
      url: '/categories',
      icon: 'apps'
    },
    {
      title: 'Deals of the Day',
      url: '/deals',
      icon: 'flame'
    },
    {
      title: 'My Account',
      url: '/tabs/account',
      icon: 'person'
    },
    {
      title: 'Notification',
      url: '/notification',
      icon: 'notifications'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'information-circle'
    },
    {
      title: 'Help Center',
      url: '/contactus',
      icon: 'call'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Legal',
      url: '/legal',
      icon: 'warning'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
