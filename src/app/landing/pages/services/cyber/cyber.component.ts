import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyber',
  templateUrl: './cyber.component.html',
  styleUrls: ['./cyber.component.css']
})
export class CyberComponent implements OnInit {

  public data = {
    route: 'Cyber Security',
    heading: 'Cyber Security',
    detail: 'Explore the services we offer at deltacodes by using lorem ipsum this is some text to cover.',
    moreURL: 'case-studies'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
