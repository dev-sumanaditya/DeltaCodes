import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {

  coverData = {
    name: 'Retail & Ecommerce',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/shopping.mp4'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
