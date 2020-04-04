import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o3d',
  templateUrl: './o3d.component.html',
  styleUrls: ['./o3d.component.css']
})
export class O3dComponent implements OnInit {

  public data = {
    route: '3D',
    heading: '3-D Modeling',
    detail: 'Explore the services we offer at deltacodes by using lorem ipsum this is some text to cover.',
    moreURL: 'case-studies'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
