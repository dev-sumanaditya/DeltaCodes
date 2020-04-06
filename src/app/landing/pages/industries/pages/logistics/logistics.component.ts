import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {

  coverData = {
    name: 'Logistics & Transportation',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: '/assets/industries/backgrounds/logistics.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
