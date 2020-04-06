import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  coverData = {
    name: 'Banking & Financial',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: '/assets/industries/backgrounds/fintech.jpeg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
