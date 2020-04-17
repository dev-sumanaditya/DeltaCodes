import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';


// declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public meta: Meta) {
    this.meta.addTag({ name: '', content: ''});
  }
}
