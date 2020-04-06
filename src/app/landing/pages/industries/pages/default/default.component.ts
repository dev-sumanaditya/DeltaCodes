import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  public dummy = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  public industries = [
    {
      name: 'Logistics & Transportation',
      icon1: 'logistics',
      url: 'logistics'
    },
    {
      name: 'Oil & Gas',
      icon1: 'oil',
      url: 'oil'
    },
    {
      name: 'Telecom & Internet',
      icon1: 'telecom',
      url: 'telecom'
    },
    {
      name: 'Tech & Innovation (R&D)',
      icon1: 'tech',
      url: 'tech'
    },
    {
      name: 'Financial Services',
      icon1: 'financial',
      url: 'finance'
    },
    {
      name: 'Healthcare & Life Sciences',
      icon1: 'healthcare',
      url: 'healthcare'
    },
    {
      name: 'Travel & Hospitality',
      icon1: 'travel',
      url: 'travel'
    },
    {
      name: 'Retail & Ecommerce',
      icon1: 'retail',
      url: 'retail'
    },
    {
      name: 'Education & Digital Learning',
      icon1: 'education',
      url: 'education'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
