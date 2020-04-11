import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {

  coverData = {
    name: 'Oil, Gas & Power Industry',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/oil.mp4'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
