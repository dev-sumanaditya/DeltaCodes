import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';


// declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public meta: Meta) {
    this.meta.addTags([
      {property: 'og:description', content: `Deltacodes is accelerating the digital transformation and adoption of new age technologies for businesses and top tech startup's across the globe.`}
    ]);
  }
}
