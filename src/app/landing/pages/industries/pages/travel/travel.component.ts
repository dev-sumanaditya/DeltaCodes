import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  coverData = {
    name: 'Travel & Hospitality',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/travel.mp4'
  };

  descData = {
    head: 'Building Integrated Customer Experiences in the Travel Industry',
    desc1: 'Our advanced technologies can help travel and hospitality industries Improve customer-centricity and maximize marketplace visibility and booking share across all aspects of the business.',
    desc2: 'Discover how dynamic solutions from DeltaCodes can help you increase customer loyalty and retention, improve post-experience guest reviews, deliver real-time pricing and status information and plan and manage resources more effectively.',
    url: '/blog'
  };

  public next = [
    {
      name: 'Artificial Intelligence',
      icon: 'ai',
      text: `Use Artificial Intelligence to analyze energy and utility data so
      you can deliver affordable and sustainable services to your customers.`
    },
    {
      name: 'IoT',
      icon: 'iot',
      text: `Monitor Energy and utility data with technologies tailored to predict, automate and optimize
       operations resulting in effecient allocation of resources.`
    },
    {
      name: 'Blockchain',
      icon: 'blockchain',
      text: `Leverage Blockchain Technology to increase data security and build system transparency
       throughout your business – all the while gaining the trust of your consumers.`
    },
    {
      name: 'Cloud',
      icon: 'cloud',
      text: `By leveraging the power of Cloud you can use energy and utility data to improve service operations,
      ease product development, and deliver real-time insights to cut down on costs.`
    },
  ];

  public contact = {
    name: 'Travel & Hospitality Sector'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
