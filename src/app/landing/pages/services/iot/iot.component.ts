import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  public data = {
    route: 'IOT',
    heading: 'Internet Of Things',
    detail: 'Explore the services we offer at deltacodes by using lorem ipsum this is some text to cover.',
    moreURL: 'case-studies'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
