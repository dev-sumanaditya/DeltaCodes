import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  coverData = {
    name: 'Travel & Hospitality',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: '/assets/industries/backgrounds/travel.jpeg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
