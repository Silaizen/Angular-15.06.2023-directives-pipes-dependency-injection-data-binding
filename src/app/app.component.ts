import { Component } from '@angular/core';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes = [
'Patience is a key element of success',
'If you think your teacher is tough, wait till you get a boss',
'Life is not fair — get used to it!',
'Success is a lousy teacher. It seduces smart people into thinking they cant lose' ,
'Be nice to nerds...'
];
imageSrc = 'assets/Bill.png';

currencyValue = 12345.67;
percentValue = 0.75;
largestCar = 'BMW X7';
  largestPlane = 'Airbus A380';
  largestShip = 'Oasis of the Seas';

  selectedTransport: string = '';

  showCarInfo() {
    this.selectedTransport = 'car';
  }

  showPlaneInfo() {
    this.selectedTransport = 'plane';
  }

  showShipInfo() {
    this.selectedTransport = 'ship';

}}
