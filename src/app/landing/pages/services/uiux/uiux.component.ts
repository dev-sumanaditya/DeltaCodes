import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uiux',
  templateUrl: './uiux.component.html',
  styleUrls: ['./uiux.component.css']
})
export class UiuxComponent implements OnInit {

  public data = {
    route: 'User Interface',
    heading: 'User Interface Design & Development',
    detail: 'Explore the services we offer at deltacodes by using lorem ipsum this is some text to cover.',
    moreURL: 'case-studies'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
