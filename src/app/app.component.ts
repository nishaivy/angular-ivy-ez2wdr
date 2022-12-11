import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  MovieList = {
    title: 'Angular Js',
    year: 2022,
    link: 'https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/set',
  };
  onCheckout(event) {
    console.log('checkout', event.target);
  }
  titleHover(message) {
    console.log(message + ' on title');
  }
}
