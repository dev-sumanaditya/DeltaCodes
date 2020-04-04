import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robotics',
  templateUrl: './robotics.component.html',
  styleUrls: ['./robotics.component.css']
})
export class RoboticsComponent implements OnInit {

  public data = {
    route: 'Robotics',
    heading: 'Robotics and Unmanned Aerial Vehicles',
    detail: 'Explore the services we offer at deltacodes by using lorem ipsum this is some text to cover.',
    moreURL: 'case-studies'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
