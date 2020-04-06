import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent implements OnInit {

  coverData = {
    name: 'Healthcare & Life Sciences',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: '/assets/industries/backgrounds/healthcare.jpeg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
